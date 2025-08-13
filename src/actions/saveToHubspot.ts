
'use server';

// HubSpot API docs:
// Create contact: https://developers.hubspot.com/docs/api/crm/contacts#create
// Update contact: https://developers.hubspot.com/docs/api/crm/contacts#update
// Search contacts: https://developers.hubspot.com/docs/api/crm/contacts#search

const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

/**
 * Searches for a HubSpot contact by email.
 * @param email - The email to search for.
 * @returns The contact ID if found, otherwise null.
 */
async function findContactByEmail(email: string): Promise<string | null> {
    if (!HUBSPOT_ACCESS_TOKEN) {
        console.error('HubSpot Access Token is not configured.');
        throw new Error('Server configuration error.');
    }

    try {
        const searchPayload = {
            filterGroups: [{
                filters: [{
                    propertyName: 'email',
                    operator: 'EQ',
                    value: email
                }]
            }],
            properties: ['email'],
            limit: 1
        };

        const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts/search', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(searchPayload)
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('HubSpot API Error (Search):', error);
            throw new Error('Failed to search for contact in HubSpot');
        }

        const result = await response.json();
        if (result.total > 0 && result.results[0]?.id) {
            return result.results[0].id;
        }
        return null;
    } catch (error) {
        console.error(error);
        throw new Error('An unexpected error occurred while searching for the contact.');
    }
}


type ContactData = {
    name: string;
    email: string;
    phone: string;
    state: string;
    city: string;
    lookingFor: string;
    quantity: string;
    contactId?: string | null;
};

/**
 * Creates or updates a contact in HubSpot.
 * If a contactId is provided, it updates the contact.
 * Otherwise, it searches for an existing contact by email. If found, it updates that contact.
 * If not found, it creates a new contact.
 * @param data - The contact data from the form, optionally including a contactId.
 * @returns An object confirming the action was successful and the contactId.
 */
export async function saveOrUpdateContact(data: ContactData) {
    console.log('--- SAVING/UPDATING CONTACT IN HUBSPOT ---');

    if (!HUBSPOT_ACCESS_TOKEN) {
        console.error('HubSpot Access Token is not configured.');
        throw new Error('Server configuration error.');
    }
    
    let contactId = data.contactId || await findContactByEmail(data.email);

    const properties: Record<string, string> = {
        email: data.email,
    };
    if (data.name) {
        properties.firstname = data.name.split(' ')[0] || '';
        properties.lastname = data.name.split(' ').slice(1).join(' ') || '';
    }
    if (data.phone) properties.phone = data.phone;
    if (data.state) properties.state = data.state;
    if (data.city) properties.city = data.city;
    if (data.lookingFor) properties.looking_for = data.lookingFor;
    if (data.quantity) properties.required_quantity = data.quantity;


    try {
        let response;
        let url;
        let method;

        if (contactId) {
            console.log(`--- UPDATING EXISTING CONTACT --- Contact ID: ${contactId}`);
            url = `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`;
            method = 'PATCH';
        } else {
            console.log('--- CREATING NEW CONTACT ---');
            url = 'https://api.hubapi.com/crm/v3/objects/contacts';
            method = 'POST';
        }

        response = await fetch(url, {
            method: method,
            headers: {
                'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ properties })
        });

        if (!response.ok) {
            const error = await response.json();
            const action = contactId ? 'Update' : 'Create';
            console.error(`HubSpot API Error (${action}):`, error);
            throw new Error(`Failed to ${action.toLowerCase()} contact in HubSpot`);
        }

        const result = await response.json();
        console.log(`--- CONTACT ${contactId ? 'UPDATED' : 'CREATED'} SUCCESSFULLY ---`, result.id);
        return { success: true, contactId: result.id };

    } catch (error) {
        console.error(error);
        throw new Error('An unexpected error occurred while saving the contact.');
    }
}
