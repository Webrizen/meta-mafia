import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: 'Privacy Policy | MetaMafia, Next.js Metadata Generator',
  description: 'Privacy policy for the Next.js Metadata Generator tool, detailing how we collect, use, and protect your data.',
}

export default function PrivacyPolicy() {
  return (
    <div className="max-w-xl mx-auto space-y-6 my-12">
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>1. Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            This Privacy Policy explains how the Next.js Metadata Generator ("we", "our", or "us") collects, uses, and protects your personal information when you use our service. We are committed to ensuring that your privacy is protected.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2. Information We Collect</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            We collect the following types of information:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Information you provide when using our generator (e.g., website titles, descriptions, URLs)</li>
            <li>Usage data (e.g., how you interact with our service)</li>
            <li>Technical data (e.g., IP address, browser type and version)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>3. How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            We use your information to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Provide and maintain our service</li>
            <li>Improve and personalize your experience</li>
            <li>Analyze usage of our service</li>
            <li>Communicate with you about our service</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>4. Data Storage and Security</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            We are committed to ensuring that your information is secure. We have implemented suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>5. Cookies</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            We use cookies to improve your experience on our website. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>6. Third-Party Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            We may use third-party services to analyze the use of our service. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>7. Your Rights</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            You have the right to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Access the personal information we hold about you</li>
            <li>Request that we correct any personal information we hold about you</li>
            <li>Request that we delete any personal information we hold about you</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>8. Changes to This Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>9. Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Email: webrizen@gmail.com
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
