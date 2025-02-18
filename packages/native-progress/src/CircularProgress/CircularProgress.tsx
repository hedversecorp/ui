import { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedProps,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { Svg, Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export interface CircularProgressProps {
  value: number;
  radius?: number;
  duration?: number;
  strokeWidth?: number;
  showLabel?: boolean;
  activeStrokeColor?: string;
  inActiveStrokeColor?: string;
  inActiveStrokeOpacity?: number;
  progressValueColor?: string;
  progressValueStyle?: StyleProp<TextStyle>;
  valueSuffix?: string;
}

function CircularProgress(props: CircularProgressProps) {
  const {
    value = 0,
    radius = 28,
    duration = 2000,
    strokeWidth = 4,
    showLabel = true,
    activeStrokeColor = "#f97316",
    inActiveStrokeColor = "#fed7aa",
    inActiveStrokeOpacity = 0.2,
    progressValueColor = "#f97316",
    progressValueStyle,
    valueSuffix = "%",
  } = props;

  const size = radius * 2;
  const circleRadius = (size - strokeWidth) / 2;
  const circumference = circleRadius * 2 * Math.PI;
  const [labelText, setLabelText] = useState(0);

  const progressValue = useDerivedValue(() => {
    if (showLabel) {
      runOnJS(setLabelText)(Math.min(Math.round(value), 100));
    }
    return withTiming(value, { duration });
  }, [value]);

  const circleAnimatedProps = useAnimatedProps(() => {
    const progressPercent = interpolate(
      progressValue.value,
      [0, 100],
      [100, 0],
      Extrapolate.CLAMP
    );
    return {
      strokeDashoffset: circleRadius * Math.PI * 2 * (progressPercent / 100),
    };
  });

  const labelViewStyle: StyleProp<ViewStyle> = [
    styles.labelView,
    {
      width: size,
      height: size,
    },
  ];

  const defaultValueStyle: StyleProp<TextStyle> = {
    color: progressValueColor,
    fontSize: 14,
    fontWeight: "500",
  };

  const labelTextStyle: StyleProp<TextStyle> = [
    defaultValueStyle,
    progressValueStyle,
  ];

  return (
    <View>
      <Svg width={size} height={size}>
        <Circle
          stroke={inActiveStrokeColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={circleRadius}
          strokeWidth={strokeWidth}
          opacity={inActiveStrokeOpacity}
        />
        <AnimatedCircle
          stroke={activeStrokeColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={circleRadius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          strokeWidth={strokeWidth}
          animatedProps={circleAnimatedProps}
        />
      </Svg>
      {showLabel && (
        <View style={labelViewStyle}>
          <Animated.Text style={labelTextStyle}>
            {`${labelText}${valueSuffix}`}
          </Animated.Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  labelView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CircularProgress;
