
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { saveOrUpdateContact } from "@/actions/saveToHubspot";

const step1Schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

const step2Schema = z.object({
  state: z.string(),
  city: z.string(),
  lookingFor: z.enum(["Single Chair", "Bulk Order", "Custom Design"]),
  quantity: z.string().min(1, { message: "Quantity is required." }),
});

const formSchema = step1Schema.merge(step2Schema);
type FormData = z.infer<typeof formSchema>;

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hubspotContactId, setHubspotContactId] = useState<string | null>(null);

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(step === 1 ? step1Schema : formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      state: "Uttar Pradesh",
      city: "Varanasi",
      lookingFor: "Single Chair",
      quantity: "1",
    },
    mode: "onChange",
  });

  const handleNextStep = async () => {
    const step1Valid = await form.trigger(["name", "phone", "email"]);
    if (!step1Valid) return;

    setIsSubmitting(true);
    try {
      const data = form.getValues();
      const result = await saveOrUpdateContact({ 
        ...data,
        contactId: hubspotContactId
      });
      if (result.success && result.contactId) {
        setHubspotContactId(result.contactId);
        setStep(2);
      } else {
        throw new Error("Failed to save contact information.");
      }
    } catch (error) {
      console.error("Step 1 Submission Error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Could not save your information. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFinalSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await saveOrUpdateContact({
        ...data,
        contactId: hubspotContactId,
      });
      if (result.success) {
        sessionStorage.setItem("submissionSuccess", "true");
        router.push("/thank-you");
      } else {
        throw new Error("Submission failed, but no error was thrown from server action.");
      }
    } catch (error) {
      console.error("Final Submission Error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Could not save your information. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (step === 1) {
      await handleNextStep();
    } else {
      await handleFinalSubmit(data);
    }
  };
  
  const progressValue = ((step - 1) / 2) * 100;

  return (
    <Card className="bg-gray-50/90 backdrop-blur-sm text-black shadow-2xl border">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-center">Request for Catalogue</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
          <>
            <div className="mb-6 text-center">
              <p className="text-sm font-semibold text-primary">Step {step} of 2</p>
              <Progress value={progressValue} className="w-full mt-2 h-2" />
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-4">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="bg-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="9876543210" {...field} className="bg-white"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john.doe@example.com" {...field} className="bg-white"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                         <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-black">State</FormLabel>
                                <FormControl>
                                  <Input {...field} disabled className="bg-gray-200"/>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                           <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-black">City</FormLabel>
                                <FormControl>
                                  <Input {...field} disabled className="bg-gray-200"/>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                      </div>
                      <FormField
                        control={form.control}
                        name="lookingFor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">Looking For</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white">
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Single Chair">Single Chair</SelectItem>
                                <SelectItem value="Bulk Order">Bulk Order</SelectItem>
                                <SelectItem value="Custom Design">Custom Design</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">Required Quantity</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="e.g., 10" {...field} className="bg-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="flex gap-2">
                    {step === 2 && (
                        <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-1/3">
                            Back
                        </Button>
                    )}
                    <Button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground font-bold" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : step === 1 ? 'Next' : 'Request for Catalogue'}
                    </Button>
                </div>
              </form>
            </Form>
          </>
      </CardContent>
    </Card>
  );
}
