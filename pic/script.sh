for f in *.HEIC; do
  [ -e "$f" ] || continue
  magick "$f" "${f%.*}.webp"
done
