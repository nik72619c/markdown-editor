import React from 'react';
import Heading from './components/heading';
import ImageElement from './components/image';
import HorizontalRule from './components/hr';

import * as SCHEMA from './schema';

const Element = (props) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case SCHEMA.PARAGRAPH:
      return <p {...attributes}>{children}</p>;
    case SCHEMA.H1:
      return <Heading as="h1" {...attributes}>{children}</Heading>;
    case SCHEMA.H2:
      return <Heading as="h2" {...attributes}>{children}</Heading>;
    case SCHEMA.H3:
      return <Heading as="h3" {...attributes}>{children}</Heading>;
    case SCHEMA.H4:
      return <Heading as="h4" {...attributes}>{children}</Heading>;
    case SCHEMA.H5:
      return <Heading as="h5" {...attributes}>{children}</Heading>;
    case SCHEMA.H6:
      return <Heading as="h6" {...attributes}>{children}</Heading>;
    case SCHEMA.HR:
      return <HorizontalRule {...attributes}>{children}</HorizontalRule>;
    case SCHEMA.CODE_BLOCK:
      return <pre {...attributes}>{children}</pre>;
    case SCHEMA.HTML_BLOCK:
      return <pre className="html_block" {...attributes}>{children}</pre>;
    case SCHEMA.BLOCK_QUOTE:
      return <blockquote {...attributes}>{children}</blockquote>;
    case SCHEMA.UL_LIST:
      return <ul {...attributes}>{children}</ul>;
    case SCHEMA.LIST_ITEM:
      return <li {...attributes}>{children}</li>;
    case SCHEMA.OL_LIST:
      return <ol {...attributes}>{children}</ol>;
    case SCHEMA.LINK:
      return <a {...attributes} href={element.data.href}>{children}</a>;
    case SCHEMA.IMAGE:
      return <ImageElement {...props} />;
    case SCHEMA.HTML_INLINE:
      return <span className='html_inline' {...attributes}>{element.data.content}{children}</span>;
    case SCHEMA.SOFTBREAK:
      return <span className='softbreak' {...attributes}> {children}</span>;
    case SCHEMA.LINEBREAK:
      return <br className='linebreak' {...attributes}/>;
    default:
      console.log(`Didn't know how to render ${JSON.stringify(element, null, 2)}`);
      return <p {...attributes}>{children}</p>;
  }
};

export default Element;