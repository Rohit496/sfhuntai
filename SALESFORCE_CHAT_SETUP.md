# Salesforce Embedded Messaging API Troubleshooting

## Issue: Empty Response from API

If you're getting an empty `{}` response when calling the Salesforce Embedded Messaging API, here are the common causes and solutions:

### Common Issues:

1. **Missing Authentication Headers**
   - The API requires proper authentication tokens
   - You need session tokens or OAuth tokens from the Embedded Messaging widget

2. **CORS Configuration**
   - Your domain must be whitelisted in Salesforce Embedded Messaging settings
   - Check: Setup → Embedded Messaging → CORS Settings

3. **Invalid Conversation ID**
   - The conversation ID must be from an active conversation
   - Ensure the conversation was created through the widget

4. **Missing Required Headers**
   - The API may require specific headers like:
     - `Authorization: Bearer <token>`
     - `Content-Type: application/json`
     - `X-SFDC-Session: <session-id>`

### Recommended Approach:

**Don't make direct API calls** - Let the Embedded Messaging widget handle it automatically. The widget manages:
- Authentication tokens
- Session management
- Conversation creation
- Message sending

### If You Must Make Direct API Calls:

1. **Get Authentication Token:**
   ```javascript
   // The widget stores tokens in embeddedservice_bootstrap
   const token = embeddedservice_bootstrap.settings.sessionId;
   ```

2. **Include Proper Headers:**
   ```javascript
   fetch('https://orgfarm-d4d03d3f06-dev-ed.develop.my.salesforce-scrt.com/iamessage/v1/conversation/{conversationId}/message', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`,
       // May also need:
       // 'X-SFDC-Session': sessionId,
       // 'X-SFDC-OrgId': orgId
     },
     body: JSON.stringify({
       id: "886c5db7-2e5c-4d29-84aa-9e1828538ad0",
       messageType: "StaticContentMessage",
       staticContent: {
         formatType: "Text",
         text: "give me pricing options available"
       },
       language: "en"
     })
   })
   ```

3. **Check Salesforce Setup:**
   - Verify CORS is enabled for your domain
   - Ensure Embedded Messaging is properly configured
   - Check that the conversation exists and is active

### Debugging Steps:

1. **Check Browser Console:**
   - Look for authentication errors
   - Check for CORS errors
   - Verify the widget is loading correctly

2. **Verify Widget Initialization:**
   ```javascript
   // In browser console, check:
   console.log(embeddedservice_bootstrap);
   console.log(embeddedservice_bootstrap.settings);
   ```

3. **Test with Widget:**
   - Use the chat widget UI to send messages
   - This will help verify the configuration is correct

### Alternative: Use Widget API

Instead of direct API calls, use the widget's built-in methods:

```javascript
// After widget loads
if (embeddedservice_bootstrap && embeddedservice_bootstrap.sendMessage) {
  embeddedservice_bootstrap.sendMessage({
    text: "give me pricing options available"
  });
}
```

### Salesforce Setup Checklist:

- [ ] Embedded Messaging is enabled in Salesforce Setup
- [ ] Your domain (sfai.netlify.app) is whitelisted in CORS settings
- [ ] The deployment is configured correctly
- [ ] The widget script is loading without errors
- [ ] Conversations can be created through the widget UI

### Need Help?

If the widget is working but direct API calls aren't, consider:
1. Using the widget's built-in messaging instead
2. Creating a Next.js API route that proxies requests with proper auth
3. Checking Salesforce documentation for the latest API requirements


