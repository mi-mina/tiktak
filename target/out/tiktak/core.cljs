(ns tiktak.core
    (:require [rum :as r]))

(enable-console-print!)

(def h1
  {:text "Hola Spirograph"
   :c "#009999"
   :pad 20
   :t-a "center"})

(def p1
  {:text "Las siguientes imagenes..."
   :t-a "center"})

(def i1
  {:image-src "/images/spiro.gif"
   :alt "imagen de spiro"
   :w 400
   :h 400
   :t-a "center"})

(def p2
  {:text "han sido creadas con Clojure"
   :t-a "center"})

(r/defc render-h [h]
 [:h1 {:style {:color (:c h)
               :padding (:pad h)
               :text-align (:t-a h)}} (:text h)])

(r/defc render-p [p]
 [:p {:style {:color (:c p)
               :padding (:pad p)
               :text-align (:t-a p)}} (:text p)])

(r/defc render-i [i]
 [:p {:style {:text-align (:t-a i)}} [:img {:src (:image-src i)
                                            :alt (:alt i)
                                            :style {:with 400
                                                    :height 400
                                                    }}]])

(r/mount (render-h h1) (.getElementById js/document "titulo"))
(r/mount (render-p p1) (.getElementById js/document "parrafo1"))
(r/mount (render-p p2) (.getElementById js/document "parrafo2"))
(r/mount (render-i i1) (.getElementById js/document "imagenes"))

