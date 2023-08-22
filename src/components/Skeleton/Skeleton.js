import React from 'react';
import {Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Skeleton = () => {
  return (
    <SkeletonPlaceholder
      highlightColor={'#BDC6D9'}
      borderRadius={5}
      marginLeft={20}
      marginRight={20}
      speed={1000}>
      <SkeletonPlaceholder.Item flexDirection="column" alignItems="center">
        <SkeletonPlaceholder.Item
          marginLeft={20}
          marginRight={20}
          marginTop={20}>
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={20}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={40}
            marginTop={5}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={20}
            marginTop={5}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          marginLeft={20}
          marginRight={20}
          marginTop={20}>
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={20}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={40}
            marginTop={5}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={20}
            marginTop={5}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          marginLeft={20}
          marginRight={20}
          marginTop={20}>
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={20}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={40}
            marginTop={5}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={20}
            marginTop={5}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          marginLeft={20}
          marginRight={20}
          marginTop={20}>
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={20}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={40}
            marginTop={5}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={20}
            marginTop={5}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          marginLeft={20}
          marginRight={20}
          marginTop={20}>
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={20}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={40}
            marginTop={5}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('screen').width - 40}
            height={20}
            marginTop={5}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default Skeleton;
