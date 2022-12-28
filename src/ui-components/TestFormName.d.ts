/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestFormNameInputValues = {};
export declare type TestFormNameValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestFormNameOverridesProps = {
    TestFormNameGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type TestFormNameProps = React.PropsWithChildren<{
    overrides?: TestFormNameOverridesProps | undefined | null;
} & {
    onSubmit: (fields: TestFormNameInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: TestFormNameInputValues) => TestFormNameInputValues;
    onValidate?: TestFormNameValidationValues;
} & React.CSSProperties>;
export default function TestFormName(props: TestFormNameProps): React.ReactElement;
