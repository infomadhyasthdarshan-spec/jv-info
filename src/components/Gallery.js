import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function Gallery({ images }) {
  return (
    <div className="text-center">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="
    grid
    grid-cols-2
    sm:grid-cols-2
    md:grid-cols-3
    gap-4
    max-w-5xl
    mx-auto

    [&>a]:w-full

    // Grid Layout Customization
    [&>a:nth-child(1)]:col-span-2
    sm:[&>a:nth-child(1)]:col-span-2
    md:[&>a:nth-child(1)]:col-span-1

    [&>a:nth-child(2)]:col-span-1
    [&>a:nth-child(3)]:col-span-1
    md:[&>a:nth-child(2)]:col-span-1

    // HIDE LAST 3 IMAGES ON SMALL DEVICES
    [&>a:nth-last-child(1)]:hidden
    [&>a:nth-last-child(2)]:hidden
    [&>a:nth-last-child(3)]:hidden
    md:[&>a:nth-last-child(1)]:block
    md:[&>a:nth-last-child(2)]:block
    md:[&>a:nth-last-child(3)]:block
  "
      >


        {images.map((image, idx) => (
          <a
            href={image.src}
            key={idx}
            data-sub-html={`<h4>${image.alt}</h4>`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[196px] object-cover rounded-lg cursor-pointer hover:opacity-90 transition"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
