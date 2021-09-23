import featuredb from "src/assets/data/features.json";
import { Feature } from "./feature.model";

export class FeatureService {
    private featuresFromJson : Feature[] = this.SetFeaturesFromJson();
    private features : Feature[] = this.SetFeatures();

    private SetFeaturesFromJson() : Feature[] {
        return featuredb.slice();
    }
    private SetFeatures() : Feature[]  {
        return this.featuresFromJson.slice();
    }
    public GetFeatures() : Feature[] {
        return this.features.slice();
    }
}