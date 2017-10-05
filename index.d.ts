import * as React from 'react';

type Identifier = string;

export interface IDrillableItem {
    identifier: Identifier,
    uri: string
}

export interface IVisualizationData {
    headers?: object[]; // TODO replace
    rawData?: any[][]; // TODO replace with https://github.com/gooddata/gooddata-js/pull/228/files#diff-b52768974e6bc0faccb7d4b75b162c99R184
}

export interface TableTransformationProps {
    afm?: object,
    config?: object,
    data: IVisualizationData;
    drillableItems?: IDrillableItem[],
    tableRenderer: Function,
    height?: number,
    width?: number,
    onSortChange?: Function;
    afterRender?: Function;
}

export interface TableVisualizationProps {
    afm?: object; // TODO add AFM interface
    drillableItems?: IDrillableItem[];
    containerWidth: number;
    containerHeight?: number;
    containerMaxHeight?: number;
    hasHiddenRows?: boolean;
    rows: any[];
    headers: any[];
    sortInTooltip?: boolean;
    sortDir?: string;
    sortBy?: number;
    onSortChange?: Function;
    stickyHeader?: number;
    afterRender?: Function;
}

export interface ResponsiveTableProps extends TableVisualizationProps {
    rowsPerPage: number;
    page?: number;
    onMore?: Function;
    onLess?: Function;
}
export interface ResponsiveTableState {
    page: number;
}

export interface IVisualisationProps {
    config: {
        type: string;
    };
    numericSymbols?: any[]; // todo validate type, as any is kind of useless
    afterRender?: () => any;
    afm: object; // todo replace with afm definition
    config: {
        buckets: object;
        type: string;
        legend: {
            enabled: boolean;

        };
        colors: string[]
    };
    limits?: {
        series?: number;
        categories?: number;
    };
    data: {
        headers?: object[];
        rawData: any[][];
    };
    drillableItems?: IDrillableItem[];
    height?: number;
    width?: number;
    lineFamilyChartRenderer?: CustomRenderer; // todo this should probably be outside of visualization props
    pieChartRenderer?: () => CustomRenderer; // todo this should probably be outside of visualization props
    onDataTooLarge: () => any;
}

type CustomRenderer = (props: any) => JSX.Element | Element;

export class ResponsiveTable extends React.Component<ResponsiveTableProps, ResponsiveTableState> {

}

export class Table extends React.Component<TableVisualizationProps, any> {

}

export class TableTransformation extends React.Component<TableTransformationProps, any> {

}

export class Visualization extends React.Component<IVisualisationProps, any> {

}
