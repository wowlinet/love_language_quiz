# Google Analytics Setup Guide

This document explains how to set up Google Analytics 4 (GA4) for the Love Language Quiz application.

## Overview

The application uses Next.js's official `@next/third-parties` package to integrate Google Analytics, which provides automatic page view tracking and optimal performance.

## Prerequisites

1. A Google Analytics account
2. A GA4 property created in your Google Analytics account

## Getting Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Create a new property or select an existing one
4. Navigate to **Admin** (bottom left)
5. Under **Property**, click on **Data Streams**
6. Select your web data stream or create a new one
7. Your **Measurement ID** will be displayed (format: `G-XXXXXXXXXX`)

## Installation Steps

### 1. Package Installation

The `@next/third-parties` package has already been installed:

```bash
npm install @next/third-parties
```

### 2. Environment Configuration

The application uses environment variables to store your GA Measurement ID securely.

#### For Development:

1. Open the `.env.local` file in the root directory
2. Add your Google Analytics Measurement ID:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

#### For Production:

Add the `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable to your hosting platform (Vercel, Netlify, etc.) with your actual Measurement ID.

### 3. Implementation

The Google Analytics component has been integrated in `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Your app content */}
        {children}

        {/* Google Analytics - Only loads if MEASUREMENT_ID is set */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  )
}
```

## Features

### Automatic Page View Tracking

The integration automatically tracks:
- Initial page loads
- Client-side navigation between routes
- Single Page Application (SPA) route changes

No additional configuration is needed for basic page view tracking.

### Custom Event Tracking (Optional)

To track custom events, you can use the `gtag` function:

```tsx
'use client'

import { sendGAEvent } from '@next/third-parties/google'

export function MyComponent() {
  const handleClick = () => {
    sendGAEvent('event', 'button_click', {
      event_category: 'engagement',
      event_label: 'quiz_start',
      value: 1
    })
  }

  return <button onClick={handleClick}>Start Quiz</button>
}
```

## Testing

### Development Testing

1. Set your GA Measurement ID in `.env.local`
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:3000`
4. Open your browser's developer tools (F12)
5. Go to the **Network** tab
6. Filter by "google-analytics" or "gtag"
7. Navigate through your app and verify requests are being sent

### Production Testing

1. Deploy your application with the `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable set
2. Visit your live site
3. Go to Google Analytics > **Reports** > **Realtime**
4. Verify that your visit is being tracked in real-time

## Environment Variables Reference

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Your Google Analytics 4 Measurement ID | No* | `G-XXXXXXXXXX` |

\* Optional - If not set, Google Analytics will not be loaded

## Privacy Considerations

### GDPR Compliance

If your users are in the EU, consider:

1. **Cookie Consent**: Implement a cookie consent banner before loading GA
2. **IP Anonymization**: GA4 anonymizes IP addresses by default
3. **Data Retention**: Configure data retention settings in GA Admin

### Privacy-Friendly Alternative

You can conditionally load GA based on user consent:

```tsx
'use client'

import { GoogleAnalytics } from '@next/third-parties/google'
import { useState, useEffect } from 'react'

export function ConditionalGA() {
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    // Check for stored consent
    const hasConsent = localStorage.getItem('ga-consent') === 'true'
    setConsent(hasConsent)
  }, [])

  if (!consent || !process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    return null
  }

  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
}
```

## Troubleshooting

### GA Not Tracking

1. **Check Measurement ID**: Verify it starts with `G-` (not `UA-`)
2. **Check Environment Variable**: Ensure `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
3. **Browser Extensions**: Ad blockers may block GA tracking
4. **Network Requests**: Check browser DevTools Network tab for GA requests
5. **Realtime Reports**: Check GA Realtime reports to see if data is coming through

### Common Errors

**Error: "Measurement ID is required"**
- Solution: Set the `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable

**Data Not Showing in Reports**
- Solution: GA4 can take 24-48 hours to show in standard reports. Use Realtime reports for immediate verification.

## Additional Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/10089681)
- [Next.js Third-Party Libraries Guide](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
- [@next/third-parties Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-analytics)

## Support

For issues related to:
- **Google Analytics**: Contact Google Analytics support
- **Implementation**: Create an issue in the project repository
