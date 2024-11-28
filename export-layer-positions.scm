(define (export-layer-positions image drawable)
  (let* ((layers (vector->list (cadr (gimp-image-get-layers image))))
         (file (open-output-file "layer_positions.txt"))
         (write-layer-info (lambda (layer)
                             (let* ((layer-name (car (gimp-drawable-get-name layer)))
                                    (x-offset (car (gimp-drawable-get-offsets layer)))
                                    (y-offset (cadr (gimp-drawable-get-offsets layer))))
                               (fprintf file "Layer: %s, X: %d, Y: %d\n" layer-name x-offset y-offset)))))
    (for-each write-layer-info layers)
    (close-output-port file)))

(script-fu-register "export-layer-positions"
                    "Export Layer Positions"
                    "Exports the positions of all layers in the image to a text file"
                    "Your Name"
                    "Your Name"
                    "2024"
                    "*"
                    SF-IMAGE "Image" 0
                    SF-DRAWABLE "Drawable" 0)
(script-fu-menu-register "export-layer-positions" "<Image>/File")
