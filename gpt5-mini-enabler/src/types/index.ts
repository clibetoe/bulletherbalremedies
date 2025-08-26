export interface FeatureRequest {
    featureName: string;
    userId: string;
}

export interface FeatureResponse {
    success: boolean;
    message: string;
    data?: any;
}