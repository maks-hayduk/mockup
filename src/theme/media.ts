import { css } from 'styled-components';

interface ISizes {
  phone: number;
}

export const sizes: any = {
  phone: 722
};

type Media = Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: object[]) => string>;

export const media = Object.keys(sizes).reduce(
 (acc, label) => {
   acc[label] = (...args: [TemplateStringsArray, string]) => css`
     @media (max-width: ${sizes[label] / 16}em) {
       ${css.apply(null, args)}
     }
   `;

   return acc;
 },
 {} as any
);
