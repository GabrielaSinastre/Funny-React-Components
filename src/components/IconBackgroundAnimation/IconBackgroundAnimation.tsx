import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faAddressBook, faBath, faShower, faThermometerHalf, faBalanceScale, 
  faBatteryThreeQuarters, faBell, faBicycle, faBolt, faBullhorn,
  faCommentDots, faComments, faEnvelope, faGift, faGlobe,
  faGraduationCap, faHeart, faHourglassEnd, faPlay 
} from '@fortawesome/free-solid-svg-icons';
import { RowContainer, IconGroup, StyledIcon, Section } from './styles';

library.add(
  faAddressBook, faBath, faShower, faThermometerHalf, faBalanceScale, 
  faBatteryThreeQuarters, faBell, faBicycle, faBolt, faBullhorn,
  faCommentDots, faComments, faEnvelope, faGift, faGlobe,
  faGraduationCap, faHeart, faHourglassEnd, faPlay
);

const iconList = [
  faAddressBook, faBath, faShower, faThermometerHalf, faBalanceScale, 
  faBatteryThreeQuarters, faBell, faBicycle, faBolt, faBullhorn,
  faCommentDots, faComments, faEnvelope, faGift, faGlobe,
  faGraduationCap, faHeart, faHourglassEnd, faPlay
];

const Row = () => (
  <RowContainer>
    <IconGroup>
      {iconList.map((icon, index) => (
        <StyledIcon key={index} icon={icon} />
      ))}
    </IconGroup>
    <IconGroup>
      {iconList.map((icon, index) => (
        <StyledIcon key={index} icon={icon} />
      ))}
    </IconGroup>
  </RowContainer>
);

export const IconBackgroundAnimation = () => {
  return (
    <Section>
      {[...Array(20)].map((_, index) => (
        <Row key={index} />
      ))}
    </Section>
  );
};