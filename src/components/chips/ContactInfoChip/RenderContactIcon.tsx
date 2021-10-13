import styled from "styled-components";

import { EmailIcon } from "../../images/icons/EmailIcon";
import { PhoneIcon } from "../../images/icons/PhoneIcon";
import { Icon } from "../../../types/components";

interface RenderIconProps {
  icon: Icon;
}

const Email = styled.div`
  width: 42px;
`;

const Phone = styled.div`
  width: 32px;
`;

export const RenderContactIcon: React.FC<RenderIconProps> = ({ icon }) => {
  switch (icon) {
    case "email": {
      return (
        <Email>
          <EmailIcon />
        </Email>
      );
    }
    case "phone": {
      return (
        <Phone>
          <PhoneIcon />
        </Phone>
      );
    }
    default: {
      throw new Error(
        "You did not handle all possible icons. In ContactInfoChip compoent."
      );
    }
  }
};
