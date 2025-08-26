export class FeatureController {
    private featureService: FeatureService;

    constructor(featureService: FeatureService) {
        this.featureService = featureService;
    }

    public async enableFeature(req: FeatureRequest, res: FeatureResponse): Promise<void> {
        try {
            const result = await this.featureService.activateGPT5Mini(req.body);
            res.status(200).json({ success: true, data: result });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}