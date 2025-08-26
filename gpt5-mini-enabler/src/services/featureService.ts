export class FeatureService {
    private features: { [key: string]: boolean } = {};

    constructor() {
        // Initialize default features
        this.features['gpt5-mini'] = false;
    }

    activateGPT5Mini(): boolean {
        if (!this.features['gpt5-mini']) {
            this.features['gpt5-mini'] = true;
            return true; // Feature activated successfully
        }
        return false; // Feature was already activated
    }

    isFeatureActive(featureName: string): boolean {
        return this.features[featureName] || false;
    }

    deactivateFeature(featureName: string): boolean {
        if (this.features[featureName]) {
            this.features[featureName] = false;
            return true; // Feature deactivated successfully
        }
        return false; // Feature was not active
    }
}