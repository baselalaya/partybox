---
description: Set up Google Sheets Webhook for Leads
---

1.  Create a new Google Sheet.
2.  Add headers in the first row: `Date`, `Name`, `Email`, `Phone`, `Company`, `Interest`, `Message`.
3.  Go to **Extensions** > **Apps Script**.
4.  Paste the following code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.phone,
      data.company,
      data.boothInterest,
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({"result":"success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({"result":"error", "error": error}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

5.  Click **Deploy** > **New deployment**.
6.  Select type: **Web app**.
7.  Description: "Lead Sync".
8.  Execute as: **Me**.
9.  Who has access: **Anyone** (This is crucial so the website can post to it without login).
10. Click **Deploy**.
11. Copy the **Web App URL**.
12. Add it to your `.env` file:
    ```
    GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbw6HR9DkjpPsNxHcnlFKY_jrwPFijvOI3P0920_e5Qifd9QbZEJQaoJR_cDjxSEsXq6gA/exec
    ```