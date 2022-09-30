import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../../utils/commonStyles';
import {COLORS, SIZE} from '../../utils/theme';
import {Card, IconContaniner, PaymentRow} from '../../components';
import {STRINGS} from '../../utils/strings';
import {LOCAL_IMAGES} from '../../utils/images';
import {useNavigation} from '@react-navigation/native';

const options = [
  {
    id: '1',
    image: LOCAL_IMAGES.wallets,
    label: STRINGS.wallets,
  },
  {
    id: '2',
    image: LOCAL_IMAGES.upi,
    label: STRINGS.upi,
  },
  {
    id: '3',
    image: LOCAL_IMAGES.wallets,
    label: STRINGS.netBanking,
  },
  {
    id: '4',
    image: LOCAL_IMAGES.others,
    label: STRINGS.others,
  },
];
const MorePayment = () => {
  const navigation = useNavigation();
  const navigateTo = (title: string) => {
    navigation.navigate('Pay', {title});
  };

  return (
    <View style={[commonStyles.mb12, commonStyles.mh24]}>
      <Text style={[styles.title, commonStyles.mb8]}>
        {STRINGS.morePaymentoptions}
      </Text>
      <FlatList
        data={options}
        keyExtractor={(item, index) => item.id}
        renderItem={({item, index}) => (
          <View style={commonStyles.mb8}>
            <Card>
              <PaymentRow
                onPress={() => {
                  navigateTo(item.label);
                }}
                leftIcon={
                  <IconContaniner
                    containerStyle={{
                      backgroundColor: COLORS.primary,
                    }}>
                    <Image
                      source={item.image}
                      style={{
                        width: SIZE.xl,
                        height: SIZE.xl,
                        resizeMode: 'contain',
                      }}
                    />
                  </IconContaniner>
                }
                label={item.label}
                rightIcon={
                  <Image
                      source={LOCAL_IMAGES.arrowicon}
              />
              
                // <Text style={{fontSize: SIZE.xl}}>{'>'}</Text>
              }
              />
            </Card>
          </View>
        )}
      />
    </View>
  );
};

export default MorePayment;

const styles = StyleSheet.create({
  title: {
    fontSize: SIZE.l,
    color: COLORS.primary,
    fontWeight: '600',
  },
});
