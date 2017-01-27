#!/bin/bash

java -javaagent:libs\quasar-core-0.7.7.jar \
	-XX:+UseConcMarkSweepGC \
	-XX:+UseCondCardMark \
	-XX:+UseBiasedLocking \
	-XX:+AggressiveOpts \
	-XX:+UseCompressedOops \
	-XX:+UseFastAccessorMethods \
	-XX:+DoEscapeAnalysis \
	-Xss64M \
	-Dco.paralleluniverse.fibers.detectRunawayFibers=false \
	-XX:-OmitStackTraceInFastThrow \
	-jar libs\odg-1.0.0.jar \
	"$@"