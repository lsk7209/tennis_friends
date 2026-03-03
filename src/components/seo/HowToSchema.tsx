import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';

interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  image?: string;
}

export default function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  image,
}: HowToSchemaProps) {
  const siteUrl = SITE_URL;
  const imageUrl = image
    ? (image.startsWith('http') ? image : `${siteUrl}${image}`)
    : `${siteUrl}/opengraph-image`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    image: imageUrl,
    ...(totalTime && {
      totalTime: totalTime,
    }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && {
        image: step.image.startsWith('http') ? step.image : `${siteUrl}${step.image}`,
      }),
      ...(step.url && {
        url: step.url.startsWith('http') ? step.url : `${siteUrl}${step.url}`,
      }),
    })),
  };

  return <JsonLd data={schema} />;
}

