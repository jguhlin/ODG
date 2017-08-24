(ns figwheel.connect.build-config (:require [odg.config.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "config", :websocket-url "ws://localhost:3449/figwheel-ws"})

