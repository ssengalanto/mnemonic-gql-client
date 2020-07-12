import { rem } from 'polished';
import styled, { css } from 'styled-components';
import {
  AlignSelfProps,
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
  FlexWrapProps,
  AlignContentProps,
} from 'shared/types';

export interface ColProps extends React.ComponentPropsWithoutRef<'div'> {
  flex?: boolean;
  order?: number;
  span?: number;
  flexGrow?: number;
  flexShrink?: number;
  alignSelf?: AlignSelfProps;
  direction?: FlexDirectionProps;
  alignItems?: AlignItemsProps;
  justify?: JustifyContentProps;
  alignContent?: AlignContentProps;
  gutter?: number | [number, number];
  wrap?: FlexWrapProps;
}

const flex = css`
  display: flex;
`;

const Col = styled.div<ColProps>`
  ${(props) => props.flex && flex};
  order: ${(props) => props.order};
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.alignItems || 'stretch'};
  align-content: ${(props) => props.alignContent || 'stretch'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-self: ${(props) => props.alignSelf};
  flex-wrap: ${(props) => props.wrap};

  flex-grow: ${(props) => {
    if (typeof props.flexGrow === 'number') return props.flexGrow;
    return 1;
  }};

  flex-shrink: ${(props) => {
    if (typeof props.flexShrink === 'number') return props.flexShrink;
    return 1;
  }};

  flex-basis: ${(props) => {
    if (!props.span) return 'auto';
    if (props.span >= 24) return `100%`;
    if (props.span <= 0) return `0%`;
    return `${((100 / 24) * props.span).toFixed(0)}%`;
  }};

  margin: ${(props) => {
    if (typeof props.gutter === 'number') return rem(`${props.gutter}px`);
    if (props.gutter instanceof Array)
      return `${rem(`${props.gutter[0]}px`)} ${rem(`${props.gutter[1]}px`)}`;
    return 0;
  }};
`;

export const S = { Col };
