(ns wishlistd.code)

(defn random-vowel []
  (rand-nth ["a","i","u","e","o"]))

(defn random-consonant []
  (rand-nth ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","y","z"]))

(defn random-code [length]
  (apply str
    (for [i (range length)]
      (if (even? i)
        (random-consonant)
        (random-vowel)))))