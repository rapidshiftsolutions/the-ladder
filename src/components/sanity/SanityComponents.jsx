import BlockquoteRenderer from './BlockquoteRenderer'

// Define custom components for Sanity's PortableText
export const sanityComponents = {
  types: {
    // Custom component handlers can go here
  },
  
  block: {
    // Handle blockquotes with our custom renderer
    blockquote: ({ value }) => <BlockquoteRenderer value={value} />,
    
    // Additional block type handlers can go here
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>,
    normal: ({ children }) => <p className="mb-4">{children}</p>,
  },
  
  marks: {
    // Custom mark handlers can go here
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a 
          href={value.href} 
          rel={rel}
          target={!value.href.startsWith('/') ? '_blank' : undefined}
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      )
    },
  },
}
