import { Box, Breadcrumb, BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from "@chakra-ui/react";
import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const generateStructuredData = () => {
    const itemListElement = items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href ? `https://finhubassessoria.com.br${item.href}` : undefined
    }));

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement
    };
  };

  return (
    <Box py={4} bg="gray.50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      <BreadcrumbRoot>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          if (isLast) {
            return (
              <BreadcrumbCurrentLink key={index} color="gray.600">
                {item.name}
              </BreadcrumbCurrentLink>
            );
          }

          return (
            <BreadcrumbLink key={index} asChild>
              <Link href={item.href || "/"} className="text-blue-600 hover:text-blue-800">
                {item.name}
              </Link>
            </BreadcrumbLink>
          );
        })}
      </BreadcrumbRoot>
    </Box>
  );
} 