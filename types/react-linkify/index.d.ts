// Type definitions for react-linkify 0.2
// Project: http://tasti.github.io/react-linkify/
// Definitions by: Michael James <https://github.com/majames>
//                 Jacky Wang <https://github.com/jackywang529>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import * as React from "react";

declare namespace ReactLinkify {
    /**
     * Matching information
     */
    interface MatchInfo {
        /**
         * Link schema, can be empty for fuzzy links, or for protocol-neutral links
         */
        schema: string;
        /**
         * Offset of matched text
         */
        index: number;
        /**
         * Index of next char after the end of the matched text
         */
        lastIndex: number;
        /**
         * Normalized text
         */
        text: string;
        /**
         * Link, generated from matched text
         */
        url: string;
    }

    interface Props {
        children: React.ReactNode;
        /**
         * Custom anchor tag creator
         * Default to using exisint <a> tag with the provided href={decoratedHref}, key={key}
         * and children={decoratedText}, without additional styling
         */
        componentDecorator?: (decoratedHref: string, decoratedText: string, key: number) => React.ReactNode;
        /**
         * Custom href decorator or mapper on the matched (url) href
         * Default to no transformation
         */
        hrefDecorator?: (urlHref: string) => string;
        /**
         * Custom matcher for (url), that returns each match with the matching information
         * Default to https://github.com/markdown-it/linkify-it's LinkifyIt().tlds(tlds).match
         */
        matchDecorator?: (text: string) => MatchInfo[] | null;
        /**
         * Custom text decorator or mapper on the matched (url) text
         * Default to no transformation
         */
        textDecorator?: (urlText: string) => string;
    }

    class ReactLinkify extends React.Component<Props> {}
}

export default ReactLinkify.ReactLinkify;
