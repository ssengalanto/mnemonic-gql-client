import { rem } from 'polished';
import styled from 'styled-components';
import {
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
  AlignContentProps,
  FlexWrapProps,
} from 'shared/types';

export interface RowProps extends React.ComponentPropsWithoutRef<'div'> {
  direction?: FlexDirectionProps;
  alignItems?: AlignItemsProps;
  justify?: JustifyContentProps;
  alignContent?: AlignContentProps;
  wrap?: FlexWrapProps;
  gutter?: number | [number, number];
}

const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.alignItems || 'stretch'};
  align-content: ${(props) => props.alignContent || 'stretch'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  flex-wrap: ${(props) => props.wrap};

  padding: ${(props) => {
    if (typeof props.gutter === 'number') return rem(`${props.gutter}px`);
    if (props.gutter instanceof Array)
      return `${rem(`${props.gutter[0]}px`)} ${rem(`${props.gutter[1]}px`)}`;
    return 0;
  }};
`;

export const S = { Row };
