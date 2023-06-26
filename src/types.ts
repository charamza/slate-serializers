import { Element } from 'domhandler'

type ElementWithTextContent = Element & { textContent: string }

export interface IattributeMap {
  slateAttr: string
  htmlAttr: string
}

interface ItagMap {
  [key: string]: (a: ElementWithTextContent) => object
}
