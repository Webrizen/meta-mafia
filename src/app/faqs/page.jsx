import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: 'FAQs | MetaMafia, Next.js Metadata Generator',
  description: 'Frequently Asked Questions about the Next.js Metadata Generator tool and SEO best practices.',
}

const faqCategories = [
  {
    title: "General Questions",
    description: "Basic information about the Metadata Generator",
    faqs: [
      {
        question: "What is the Next.js Metadata Generator?",
        answer: "The Next.js Metadata Generator is a tool designed to help developers create comprehensive metadata for their Next.js projects. It generates metadata for SEO purposes, as well as manifest.json, robots.txt, and sitemap.xml files."
      },
      {
        question: "Is this tool free to use?",
        answer: "Yes, the Next.js Metadata Generator is completely free to use. We believe in supporting the developer community by providing useful tools at no cost."
      },
      {
        question: "Do I need to create an account to use the generator?",
        answer: "No, you don't need to create an account to use the Metadata Generator. It's a freely accessible tool that you can use right away without any sign-up process."
      }
    ]
  },
  {
    title: "Usage and Functionality",
    description: "How to use the Metadata Generator effectively",
    faqs: [
      {
        question: "How do I use the Metadata Generator?",
        answer: "To use the generator, simply fill out the form on the main page with your project details. Once you submit the form, the tool will generate the metadata, manifest.json, robots.txt, and sitemap.xml files for you. You can then copy these and implement them in your Next.js project."
      },
      {
        question: "Can I customize the generated metadata?",
        answer: "Yes, the generator provides fields for all common metadata properties. If you need further customization, you can always edit the generated code to fit your specific needs."
      },
      {
        question: "What if I make a mistake in the form?",
        answer: "Don't worry! You can always go back and regenerate the metadata with corrected information. The tool doesn't save your data, so you can use it as many times as you need."
      }
    ]
  },
  {
    title: "Technical Details",
    description: "Specific information about the generated files",
    faqs: [
      {
        question: "What version of Next.js is this compatible with?",
        answer: "The Metadata Generator is designed to work with the latest versions of Next.js, including those that use the App Router. However, the generated metadata should be compatible with most recent versions of Next.js."
      },
      {
        question: "How often should I update my sitemap?",
        answer: "It's recommended to update your sitemap whenever you make significant changes to your website structure or content. For frequently updated sites, you might want to regenerate your sitemap weekly or monthly."
      },
      {
        question: "Can I use the generated files for non-Next.js projects?",
        answer: "While the metadata is optimized for Next.js projects, much of the generated content (like robots.txt and sitemap.xml) can be used for any web project. The manifest.json file is also universal and can be used for any Progressive Web App."
      }
    ]
  },
  {
    title: "SEO and Best Practices",
    description: "Tips for optimizing your metadata",
    faqs: [
      {
        question: "How important is metadata for SEO?",
        answer: "Metadata is crucial for SEO as it helps search engines understand the content and context of your web pages. Well-optimized metadata can improve your search engine rankings and increase click-through rates from search results pages."
      },
      {
        question: "What's the ideal length for meta descriptions?",
        answer: "While there's no strict character limit, it's generally recommended to keep meta descriptions between 150-160 characters. This ensures that they display properly in search results without being cut off."
      },
      {
        question: "How can I improve my website's SEO beyond metadata?",
        answer: "While metadata is important, other factors also contribute to SEO. Focus on creating high-quality, relevant content, optimizing your site's performance and load times, ensuring mobile-friendliness, and building quality backlinks to your site."
      }
    ]
  }
]

export default function page() {
  return (
    <div className="max-w-xl mx-auto space-y-12 my-12">
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Find answers to common questions about the Next.js Metadata Generator</p>
      </div>

      {faqCategories.map((category, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{category.title}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {category.faqs.map((faq, faqIndex) => (
                <AccordionItem value={`item-${index}-${faqIndex}`} key={faqIndex}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}