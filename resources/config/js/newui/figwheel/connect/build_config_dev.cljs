(ns figwheel.connect.build-config-dev (:require [odg.config.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/odg.config.core.mount-components (apply js/odg.config.core.mount-components x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'odg.config.core/mount-components' is missing"))), :build-id "config-dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

