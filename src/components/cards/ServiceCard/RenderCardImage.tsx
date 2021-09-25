import { WebDevImage } from "./WebDevImage";
import { LandingPageImage } from "./LandingPageImage";
import { SellOnlineImage } from "./SellOnlineImage";
import { WebsiteRewriteImage } from "./WebsiteRewriteImage";
import { EmailCampaignImage } from "./EmailCampaignImage";
import { FacebookAdsImage } from "./FacebookAdsImage";
import { ServiceImage } from "../../../types/components";

interface RenderCardImageProps {
  imageType: ServiceImage;
}

export const RenderCardImage: React.FC<RenderCardImageProps> = ({
  imageType,
}) => {
  switch (imageType) {
    case "web-dev":
      return <WebDevImage />;
    case "landing-page":
      return <LandingPageImage />;
    case "ecom":
      return <SellOnlineImage />;
    case "rewrite":
      return <WebsiteRewriteImage />;
    case "emails":
      return <EmailCampaignImage />;
    case "ads":
      return <FacebookAdsImage />;
    default: {
      throw new Error(
        "You did not handle a service image. In file RenderCardImage"
      );
    }
  }
};
