import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
// import { isClerkAPIResponseError, useSignIn } from "@clerk/clerk-expo";
import { router } from "expo-router";

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const Page = () => {
  // const { signIn } = useSignIn();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");

  const onSignIn = async (type: SignInType) => {
    if (type === SignInType.Phone) {
      const fullPhoneNumber = `${countryCode}${phoneNumber}`;

      // try {
      //   const { supportedFirstFactors } = await signIn!.create({
      //     identifier: fullPhoneNumber,
      //   });

      //   const firstPhoneFactor: any = supportedFirstFactors.find(
      //     (factor: any) => {
      //       return factor.strategy === "phone_code";
      //     }
      //   );

      //   const { phoneNumberId } = firstPhoneFactor;

      //   await signIn!.prepareFirstFactor({
      //     strategy: "phone_code",
      //     phoneNumberId,
      //   });

      //   router.push({
      //     pathname: "/verify/[phone]",
      //     params: { phone: fullPhoneNumber, signin: "true" },
      //   });
      // } catch (err) {
      //   console.log("Sign in Error", JSON.stringify(err, null, 2));

      //   if (isClerkAPIResponseError(err)) {
      //     if (err.errors[0].code === "form_identifier_not_found") {
      //       Alert.alert("Error", err.errors[0].message);
      //     }
      //   }
      // }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1 }}
      keyboardVerticalOffset={80}
    >
      <ScrollView overScrollMode="never">
        <View style={defaultStyles.container}>
          <Text style={defaultStyles.header}>Welcome back</Text>
          <Text style={defaultStyles.descriptionText}>
            Enter your phone number associated with your account
          </Text>

          <View style={styles.inputConatiner}>
            <TextInput
              value={countryCode}
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setCountryCode}
              placeholderTextColor={Colors.gray}
            />

            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Mobile number"
              keyboardType="numeric"
              value={phoneNumber}
              placeholderTextColor={Colors.gray}
              onChangeText={setPhoneNumber}
            />
          </View>

          <TouchableOpacity
            onPress={() => onSignIn(SignInType.Phone)}
            disabled={phoneNumber === ""}
            style={[
              defaultStyles.pillButton,
              { marginBottom: 23 },
              phoneNumber !== "" ? styles.enabled : styles.disable,
            ]}
          >
            <Text style={defaultStyles.buttonText}>Continue</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.gray,
                height: StyleSheet.hairlineWidth,
              }}
            />

            <Text style={{ color: Colors.gray, fontSize: 20 }}>Or</Text>

            <View
              style={{
                flex: 1,
                backgroundColor: Colors.gray,
                height: StyleSheet.hairlineWidth,
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => onSignIn(SignInType.Email)}
            style={[
              defaultStyles.pillButton,
              {
                flexDirection: "row",
                gap: 16,
                marginTop: 20,
                backgroundColor: "#fff",
              },
            ]}
          >
            <Ionicons name="mail" size={24} color="#000" />
            <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
              Continue with email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onSignIn(SignInType.Google)}
            style={[
              defaultStyles.pillButton,
              {
                flexDirection: "row",
                gap: 16,
                marginTop: 20,
                backgroundColor: "#fff",
              },
            ]}
          >
            <Ionicons name="logo-google" size={24} color="#000" />
            <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
              Continue with email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onSignIn(SignInType.Apple)}
            style={[
              defaultStyles.pillButton,
              {
                flexDirection: "row",
                gap: 16,
                marginTop: 20,
                backgroundColor: "#fff",
              },
            ]}
          >
            <Ionicons name="logo-apple" size={24} color="#000" />
            <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
              Continue with email
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Page;

const styles = StyleSheet.create({
  inputConatiner: {
    marginVertical: 40,
    flexDirection: "row",
  },

  input: {
    padding: 20,
    fontSize: 20,
    marginRight: 10,
    borderRadius: 16,
    backgroundColor: Colors.lightGray,
  },

  enabled: {
    backgroundColor: Colors.primary,
  },

  disable: {
    backgroundColor: Colors.primaryMuted,
  },
});
