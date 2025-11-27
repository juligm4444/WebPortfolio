// Centralized short descriptions for portfolio images.
// Now using i18n translation keys for multi-language support.

export function getImageDescription(name, t) {
  // Strip extension to get base name
  const base = name.split('.')[0];
  
  // Return translated description using i18n
  if (base.startsWith('Sketch')) {
    return t(`projects.sketches.imageDescriptions.${base}`, { defaultValue: 'Concept sketch exploring form and function.' });
  } else if (base.startsWith('Draw')) {
    return t(`projects.drawings.imageDescriptions.${base}`, { defaultValue: 'Digital artwork exploring composition and style.' });
  } else if (base.startsWith('TCV') || base.startsWith('TCH')) {
    return t(`projects.creative.imageDescriptions.${base}`, { defaultValue: 'Creative concept visual.' });
  }
  
  return t('projects.defaultDescription', { defaultValue: 'Concept visual exploring structure and style.' });
}
