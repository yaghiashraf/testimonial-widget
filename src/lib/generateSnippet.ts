import { WidgetConfig } from '../types'

/**
 * Generates a self-contained HTML/CSS/JS snippet for the testimonial widget
 */
export const generateSnippet = (config: WidgetConfig): string => {
  const { testimonials, theme, showPoweredBy } = config
  const widgetId = `tw-${Math.random().toString(36).substr(2, 9)}`
  
  // Generate testimonials data as JSON
  const testimonialData = JSON.stringify(testimonials.map(t => ({
    text: t.text,
    author: t.author,
    rating: t.rating || 5,
    photoUrl: t.photoUrl || null
  })))

  const snippet = `<div id="${widgetId}"></div>
<style>
#${widgetId} {
  --primary-color: ${theme.primaryColor};
  --font-size: ${theme.fontSize}px;
  max-width: 500px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: var(--font-size);
  line-height: 1.5;
}

#${widgetId} .tw-container {
  position: relative;
  background: #1f2937;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  color: #f9fafb;
  overflow: hidden;
}

#${widgetId} .tw-testimonial {
  text-align: center;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.5s ease;
}

#${widgetId} .tw-testimonial.active {
  opacity: 1;
  transform: translateX(0);
}

#${widgetId} .tw-photo {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 2px solid var(--primary-color);
  object-fit: cover;
  display: block;
}

#${widgetId} .tw-rating {
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-bottom: 1rem;
}

#${widgetId} .tw-star {
  color: #fbbf24;
  font-size: 1.25rem;
}

#${widgetId} .tw-star.empty {
  color: #6b7280;
}

#${widgetId} .tw-text {
  font-style: italic;
  margin-bottom: 1rem;
  font-size: calc(var(--font-size) + 2px);
  line-height: 1.6;
}

#${widgetId} .tw-author {
  font-weight: 600;
  color: var(--primary-color);
}

#${widgetId} .tw-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(55, 65, 81, 0.8);
  border: none;
  color: var(--primary-color);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  font-size: 16px;
  z-index: 10;
}

#${widgetId} .tw-nav:hover {
  background: rgba(55, 65, 81, 1);
  transform: translateY(-50%) scale(1.1);
}

#${widgetId} .tw-nav:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

#${widgetId} .tw-prev {
  left: 8px;
}

#${widgetId} .tw-next {
  right: 8px;
}

#${widgetId} .tw-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1.5rem;
}

#${widgetId} .tw-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  background: #6b7280;
}

#${widgetId} .tw-dot.active {
  background: var(--primary-color);
  width: 24px;
  border-radius: 4px;
}

#${widgetId} .tw-dot:hover {
  opacity: 0.7;
}

#${widgetId} .tw-powered {
  text-align: center;
  margin-top: 1rem;
  font-size: 11px;
  color: #9ca3af;
}

#${widgetId} .tw-powered a {
  color: #9ca3af;
  text-decoration: none;
}

#${widgetId} .tw-powered a:hover {
  color: #d1d5db;
}

@media (max-width: 640px) {
  #${widgetId} .tw-container {
    padding: 1.5rem;
  }
  
  #${widgetId} .tw-nav {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
}
</style>
<script>
(function() {
  const testimonials = ${testimonialData};
  const container = document.getElementById('${widgetId}');
  let currentIndex = 0;
  let isPlaying = true;
  let autoplayInterval;

  if (!container || testimonials.length === 0) return;

  function createStars(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      starsHtml += \`<span class="tw-star\${i <= rating ? '' : ' empty'}">★</span>\`;
    }
    return starsHtml;
  }

  function createTestimonialHtml(testimonial, index) {
    return \`
      <div class="tw-testimonial\${index === 0 ? ' active' : ''}" data-index="\${index}">
        \${testimonial.photoUrl ? \`<img src="\${testimonial.photoUrl}" alt="\${testimonial.author}" class="tw-photo" onerror="this.style.display='none'">\` : ''}
        <div class="tw-rating">\${createStars(testimonial.rating)}</div>
        <blockquote class="tw-text">"\${testimonial.text}"</blockquote>
        <cite class="tw-author">\${testimonial.author}</cite>
      </div>
    \`;
  }

  function createDotsHtml() {
    if (testimonials.length <= 1) return '';
    return testimonials.map((_, index) => 
      \`<button class="tw-dot\${index === 0 ? ' active' : ''}" data-index="\${index}" aria-label="View testimonial \${index + 1}"></button>\`
    ).join('');
  }

  function createNavHtml() {
    if (testimonials.length <= 1) return '';
    return \`
      <button class="tw-nav tw-prev" aria-label="Previous testimonial">←</button>
      <button class="tw-nav tw-next" aria-label="Next testimonial">→</button>
    \`;
  }

  const html = \`
    <div class="tw-container">
      \${createNavHtml()}
      \${testimonials.map(createTestimonialHtml).join('')}
      <div class="tw-dots">\${createDotsHtml()}</div>
      ${showPoweredBy ? `<div class="tw-powered"><a href="#" onclick="return false;">Powered by Testimonial Widget</a></div>` : ''}
    </div>
  \`;

  container.innerHTML = html;

  function showTestimonial(index) {
    const testimonialEls = container.querySelectorAll('.tw-testimonial');
    const dotEls = container.querySelectorAll('.tw-dot');
    
    testimonialEls.forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
    
    dotEls.forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
    
    currentIndex = index;
  }

  function nextTestimonial() {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(nextIndex);
  }

  function prevTestimonial() {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(prevIndex);
  }

  function startAutoplay() {
    if (testimonials.length <= 1) return;
    autoplayInterval = setInterval(nextTestimonial, 4000);
    isPlaying = true;
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
    isPlaying = false;
  }

  // Event listeners
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('tw-next')) {
      stopAutoplay();
      nextTestimonial();
      setTimeout(startAutoplay, 5000);
    } else if (e.target.classList.contains('tw-prev')) {
      stopAutoplay();
      prevTestimonial();
      setTimeout(startAutoplay, 5000);
    } else if (e.target.classList.contains('tw-dot')) {
      const index = parseInt(e.target.dataset.index);
      stopAutoplay();
      showTestimonial(index);
      setTimeout(startAutoplay, 5000);
    }
  });

  // Keyboard navigation
  container.setAttribute('tabindex', '0');
  container.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stopAutoplay();
      prevTestimonial();
      setTimeout(startAutoplay, 5000);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      stopAutoplay();
      nextTestimonial();
      setTimeout(startAutoplay, 5000);
    }
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > 50) {
      stopAutoplay();
      if (diff > 0) {
        nextTestimonial();
      } else {
        prevTestimonial();
      }
      setTimeout(startAutoplay, 5000);
    }
  });

  // Pause on hover
  container.addEventListener('mouseenter', stopAutoplay);
  container.addEventListener('mouseleave', startAutoplay);

  // Start autoplay
  startAutoplay();
})();
</script>`

  return snippet
}