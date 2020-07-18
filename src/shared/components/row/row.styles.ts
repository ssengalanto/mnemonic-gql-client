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
  span?: number;
  wrap?: FlexWrapProps;
  gutter?: number | [number, number];
}

const Row = styled.div<RowProps>`
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.alignItems || 'stretch'};
  align-content: ${(props) => props.alignContent || 'stretch'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  flex-wrap: ${(props) => props.wrap};

  width: ${(props) => {
    if (!props.span) return 'auto';
    if (props.span >= 24) return `100%`;
    if (props.span <= 0) return `0%`;
    return `${((100 / 24) * props.span).toFixed(0)}%`;
  }};

  padding: ${(props) => {
    if (typeof props.gutter === 'number') return rem(`${props.gutter}px`);
    if (props.gutter instanceof Array)
      return `${rem(`${props.gutter[0]}px`)} ${rem(`${props.gutter[1]}px`)}`;
    return 0;
  }};
`;

export const S = { Row };
