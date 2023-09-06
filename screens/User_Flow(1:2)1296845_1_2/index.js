import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15653076-e55a-41f7-a5b4-5664d2a02876"
        }}
        style={styles.ImageBackground_5_55}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a14ea4d-a38d-4c11-9dd6-ad93873e0a34"
        }}
        style={styles.ImageBackground_5_58}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b88957a-5836-4a7a-927e-2433e64f29db"
        }}
        style={styles.ImageBackground_5_61}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af86fc79-6813-4904-9a0a-67862d5dab4c"
        }}
        style={styles.ImageBackground_5_64}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/366715a8-b958-4b4e-ba7c-311fd394fbfa"
        }}
        style={styles.ImageBackground_5_90}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71864589-cabd-4c4a-9faf-087094db07f9"
        }}
        style={styles.ImageBackground_5_71}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6611e9d8-9e01-4caa-88bb-c176c32b6672"
        }}
        style={styles.ImageBackground_5_80}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1f39dd2-1e9b-49cc-bc59-3bb11d9006e0"
        }}
        style={styles.ImageBackground_5_82}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e66d2ee7-05a2-4727-b31f-56c1b0a6ae53"
        }}
        style={styles.ImageBackground_5_81}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/721571ef-7df0-45cc-ac43-aba41c3969ad"
        }}
        style={styles.ImageBackground_5_77}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5b9ea7b-a285-4dff-8b04-a6559a071052"
        }}
        style={styles.ImageBackground_5_85}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20758067-b92c-40cf-8651-469d7f54f456"
        }}
        style={styles.ImageBackground_5_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68add219-c903-4f85-8ecc-a0483c304fab"
        }}
        style={styles.ImageBackground_5_99}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57ac7974-6a47-4748-8eab-94791fed67e0"
        }}
        style={styles.ImageBackground_5_89}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bb19fb2-6946-4842-b6e1-52c197a41718"
        }}
        style={styles.ImageBackground_5_69}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef9c7677-aea0-4055-ab0a-d9ea8bca51e4"
        }}
        style={styles.ImageBackground_5_70}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6436775-0698-4a15-ab8c-616ea62ffd11"
        }}
        style={styles.ImageBackground_5_92}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55ab3a14-1039-430e-84b6-ce1e8205c322"
        }}
        style={styles.ImageBackground_5_45}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e4e5423-be2d-4193-bf5d-6b0be8f1966f"
        }}
        style={styles.ImageBackground_5_74}
      />
      <View style={styles.View_5_62}>
        <View style={styles.View_5_63}>
          <Text style={styles.Text_5_63}>Book Page</Text>
        </View>
      </View>
      <View style={styles.View_5_93}>
        <View style={styles.View_5_94}>
          <Text style={styles.Text_5_94}>Book Page</Text>
        </View>
      </View>
      <View style={styles.View_5_65}>
        <View style={styles.View_5_66}>
          <Text style={styles.Text_5_66}>Add book</Text>
        </View>
      </View>
      <View style={styles.View_5_67}>
        <View style={styles.View_5_68}>
          <Text style={styles.Text_5_68}>Read book</Text>
        </View>
      </View>
      <View style={styles.View_5_97}>
        <View style={styles.View_5_98}>
          <Text style={styles.Text_5_98}>Read book</Text>
        </View>
      </View>
      <View style={styles.View_5_56}>
        <View style={styles.View_5_57}>
          <Text style={styles.Text_5_57}>Filter</Text>
        </View>
      </View>
      <View style={styles.View_5_83}>
        <View style={styles.View_5_84}>
          <Text style={styles.Text_5_84}>Filter</Text>
        </View>
      </View>
      <View style={styles.View_5_59}>
        <View style={styles.View_5_60}>
          <Text style={styles.Text_5_60}>Choose book</Text>
        </View>
      </View>
      <View style={styles.View_5_78}>
        <View style={styles.View_5_79}>
          <Text style={styles.Text_5_79}>Choose book</Text>
        </View>
      </View>
      <View style={styles.View_5_87}>
        <View style={styles.View_5_88}>
          <Text style={styles.Text_5_88}>Choose book</Text>
        </View>
      </View>
      <View style={styles.View_5_72}>
        <View style={styles.View_5_73}>
          <Text style={styles.Text_5_73}>Choose genre</Text>
        </View>
      </View>
      <View style={styles.View_5_75}>
        <View style={styles.View_5_76}>
          <Text style={styles.Text_5_76}>Search</Text>
        </View>
      </View>
      <View style={styles.View_5_100}>
        <Text style={styles.Text_5_100}>
          Я уверен, что я что-то забыл и будем добавлять по мере разработки.
          Профиль расписывать пока не стал.
        </Text>
      </View>
      <View style={styles.View_5_101} />
      <View style={styles.View_195_2}>
        <Text style={styles.Text_195_2}>Поменять профиль</Text>
      </View>
      <View style={styles.View_195_3}>
        <Text style={styles.Text_195_3}>Разобраться с карточками</Text>
      </View>
      <View style={styles.View_195_4}>
        <Text style={styles.Text_195_4}>Комментарии - рецензии</Text>
      </View>
      <View style={styles.View_195_5}>
        <Text style={styles.Text_195_5}>Легальность</Text>
      </View>
      <View style={styles.View_195_6}>
        <Text text="" style={styles.Text_195_6} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("103%") },
  ImageBackground_5_55: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("24%")
  },
  ImageBackground_5_58: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("32%")
  },
  ImageBackground_5_61: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("32%")
  },
  ImageBackground_5_64: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("37%")
  },
  ImageBackground_5_90: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("24%")
  },
  ImageBackground_5_71: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("32%")
  },
  ImageBackground_5_80: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("42%")
  },
  ImageBackground_5_82: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%")
  },
  ImageBackground_5_81: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("42%")
  },
  ImageBackground_5_77: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("32%")
  },
  ImageBackground_5_85: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("30%")
  },
  ImageBackground_5_86: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("23%")
  },
  ImageBackground_5_99: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("11%")
  },
  ImageBackground_5_89: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("23%")
  },
  ImageBackground_5_69: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("47%")
  },
  ImageBackground_5_70: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("47%")
  },
  ImageBackground_5_92: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("34%")
  },
  ImageBackground_5_45: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("14%")
  },
  ImageBackground_5_74: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("25%")
  },
  View_5_62: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("43%"),
    backgroundColor: "rgba(120, 199, 255, 1)"
  },
  View_5_63: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_93: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("30%"),
    backgroundColor: "rgba(120, 199, 255, 1)"
  },
  View_5_94: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_94: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_65: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("48%"),
    backgroundColor: "rgba(120, 199, 255, 1)"
  },
  View_5_66: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_67: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("48%"),
    backgroundColor: "rgba(120, 199, 255, 1)"
  },
  View_5_68: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_68: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_97: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("35%"),
    backgroundColor: "rgba(120, 199, 255, 1)"
  },
  View_5_98: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_56: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("33%"),
    backgroundColor: "rgba(120, 199, 255, 1)"
  },
  View_5_57: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_57: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_83: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("39%"),
    backgroundColor: "rgba(120, 199, 255, 1)"
  },
  View_5_84: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_59: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_60: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_60: {
    color: "rgba(103, 103, 103, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_78: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_79: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_79: {
    color: "rgba(103, 103, 103, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_87: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_88: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_88: {
    color: "rgba(103, 103, 103, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_72: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_73: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_73: {
    color: "rgba(103, 103, 103, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_75: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_76: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_76: {
    color: "rgba(103, 103, 103, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_100: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_5_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_5_101: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("70%"),
    backgroundColor: "rgba(255, 67, 67, 1)"
  },
  View_195_2: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("88%"),
    justifyContent: "flex-start"
  },
  Text_195_2: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_195_3: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("93%"),
    justifyContent: "flex-start"
  },
  Text_195_3: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_195_4: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_195_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_195_5: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_195_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_195_6: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("77%"),
    justifyContent: "flex-start"
  },
  Text_195_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
