/**
 * Enhanced JsonLd Component for SEO/AEO Optimization
 *
 * Features:
 * - Type-safe schema support
 * - Multiple schema support via @graph
 * - Automatic validation
 * - Naver/Google/AI bot optimization
 */

type SchemaData = Record<string, unknown>;

interface JsonLdProps {
    /**
     * Schema data - can be a single schema or @graph array
     */
    data: SchemaData | { '@graph': SchemaData[] };
    
    /**
     * Optional ID for the script tag (useful for multiple schemas on same page)
     */
    id?: string;
    
    /**
     * Whether to validate the schema structure (development only)
     */
    validate?: boolean;
}

/**
 * Validates basic schema structure (development helper)
 */
function validateSchema(data: SchemaData): boolean {
    if (process.env.NODE_ENV !== 'development') return true;
    
    // Basic validation: must have @context and @type (or @graph)
    if ('@graph' in data) {
        return Array.isArray(data['@graph']) && data['@graph'].length > 0;
    }
    
    return '@context' in data && ('@type' in data || '@graph' in data);
}

export default function JsonLd({ data, id, validate = false }: JsonLdProps) {
    // Validate in development mode
    if (validate && !validateSchema(data as SchemaData)) {
        console.warn('[JsonLd] Schema validation failed:', data);
    }

    // Ensure proper formatting
    const formattedData = JSON.stringify(data, null, 0);

    return (
        <script
            type="application/ld+json"
            id={id}
            dangerouslySetInnerHTML={{ __html: formattedData }}
        />
    );
}
