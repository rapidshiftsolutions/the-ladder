/**
 * Fixed blockContent schema with proper HTML nesting
 */

export default {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
      {
        title: 'Block',
        type: 'block',
        // Styles that use semantic HTML tags to avoid nesting issues
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H1', value: 'h1'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'H4', value: 'h4'},
          // Blockquote uses a special style to avoid nesting issues
          {title: 'Quote', value: 'blockquote'},
        ],
        lists: [
          {title: 'Bullet', value: 'bullet'},
          {title: 'Number', value: 'number'}
        ],
        // Marks let you mark up inline text
        marks: {
          // Decorators usually apply simple inline formatting
          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Emphasis', value: 'em'},
            // Avoid using components that might create invalid HTML nesting
            // {title: 'Code', value: 'code'},
          ],
          // Only allow simple links without complex nesting
          annotations: [
            {
              title: 'URL',
              name: 'link',
              type: 'object',
              fields: [
                {
                  title: 'URL',
                  name: 'href',
                  type: 'url',
                },
              ],
            },
          ],
        },
      },
      // You can add other content types here
      {
        type: 'image',
        options: {hotspot: true},
      },
    ],
  }