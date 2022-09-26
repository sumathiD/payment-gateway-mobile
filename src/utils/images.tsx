import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZE } from './theme';

export const LOCAL_IMAGES = {
    close: require('../assets/images/close.png'),
    others: require('../assets/images/others.png'),
    paytm: require('../assets/images/paytm.png'),
    phonepe: require('../assets/images/phonepe.png'),
    processing: require('../assets/images/processing.png'),
    success: require('../assets/images/success.png'),
    upi: require('../assets/images/upi.png'),
    wallets: require('../assets/images/wallets.png'),
    plusicon: require('../assets/images/plus.png'),
}

export const BackIcon = (props: any) => (
    <Ionicons {...props} name='chevron-back' color={COLORS.white} size={SIZE.l} />
)

export const ForwardIcon = (props: any) => (
    <Ionicons name='chevron-forward-outline' size={SIZE.l} {...props} />
)