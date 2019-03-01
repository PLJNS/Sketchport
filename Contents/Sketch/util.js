function MSImmutableColorToDictionary(color) {
    return {
        "red": color.red(),
        "green": color.green(),
        "blue": color.blue(),
        "alpha": color.alpha()
    }
}

function MSColorToDictionary(color) {
    return {
        "red": color.red(),
        "green": color.green(),
        "blue": color.blue(),
        "alpha": color.alpha()
    }
}

function MSColorAssetsToArray(colorAssets) { // [MSColorAsset]
    var colors = []
    for (var i = 0; i < colorAssets.length; i++) {
        colors.push(MSColorAssetToDictionary(colorAssets[i]));
    }
    return colors
}

function MSColorAssetToDictionary(colorAsset) { // MSColorAsset
    return {
        "name": String(colorAsset.name()),
        "red": colorAsset.color().red(),
        "green": colorAsset.color().green(),
        "blue": colorAsset.color().blue(),
        "alpha": colorAsset.color().alpha()
    }
}

function MSSharedStyleToDictionary(sharedStyle) {
    var style = sharedStyle.value() // MSStyle
    return {
        "name": String(sharedStyle.name()),
        "value": MSStyleToDictionary(style)
    }
}

function MSSharedStylesToArray(sharedStyles) { // [MSSharedStyle]
    var styles = []
    for (var i = 0; i < sharedStyles.count(); i++) {
        var sharedStyle = sharedStyles[i] // MSSharedStyle
        styles.push(MSSharedStyleToDictionary(sharedStyle))
    }
    return styles
}

function MSStyleFillsToArray(styleFills) { // [MSStyleFill]
    var fills = []
    for (var j = 0; j < styleFills.count(); j++) {
        var styleFill = styleFills[j] // MSStyleFill
        if (styleFill.isEnabled() == 1) {
            fills.push(MSStyleFillToDictionary(styleFill))
        }
    }
    return fills
}

function MSStyleShadowsToArray(styleShadows) { // [MSStyleShadow]
    var shadows = []
    for (var j = 0; j < styleShadows.count(); j++) {
        var shadow = styleShadows[j] // MSStyleShadow
        if (shadow.isEnabled() == 1) {
            shadows.push(MSStyleShadowToDictionary(shadow))
        }
    }
    return shadows
}

function MSStyleInnerShadowsToArray(styleInnerShadows) { // [MSStyleInnerShadow]
    var innerShadows = []
    for (var j = 0; j < styleInnerShadows.count(); j++) {
        var innerShadow = styleInnerShadows[j] // MSStyleInnerShadow
        if (innerShadow.isEnabled() == 1) {
            innerShadows.push(MSStyleInnerShadowToDictionary(innerShadow))
        }
    }
    return innerShadows
}

function MSStyleBordersToArray(styleBorders) { // [MSStyleBorder]
    var borders = []
    for (var j = 0; j < styleBorders.count(); j++) {
        var border = styleBorders[j] // MSStyleBorder
        if (border.isEnabled() == 1) {
            borders.push(MSStyleBorderToDictionary(border))
        }
    }
    return borders
}

function MSStyleToDictionary(style) {
    var layerStyleDictionary = {}

    var fills = MSStyleFillsToArray(style.fills())
    if (fills.length > 0) {
        layerStyleDictionary["fills"] = fills
    }

    var shadows = MSStyleShadowsToArray(style.shadows())
    if (shadows.length > 0) {
        layerStyleDictionary["shadows"] = shadows
    }

    var innerShadows = MSStyleInnerShadowsToArray(style.innerShadows())
    if (innerShadows.length > 0) {
        layerStyleDictionary["innerShadows"] = innerShadows
    }

    var borders = MSStyleBordersToArray(style.borders())
    if (borders.length > 0) {
        layerStyleDictionary["borders"] = borders
    }

    if (style.blur().isEnabled() == 1) { // MSStyleBlur
        layerStyleDictionary["blur"] = MSStyleBlurToDictionary(styleBlur)
    }

    return layerStyleDictionary
}

function MSStyleFillToDictionary(fill) {
    return {
        "isEnabled": fill.isEnabled(),
        "gradient": MSGradientToDictionary(fill.gradient()),
        "patternFillType": fill.patternFillType(),
        "fillType": fill.fillType(),
        "noiseIndex": fill.noiseIndex(),
        "noiseIntensity": fill.noiseIntensity(),
        "patternTileScale": fill.patternTileScale(),
        "contextSettings": MSGraphicsContextSettingsToDictionary(fill.contextSettings()),
        "color": MSColorToDictionary(fill.color()),
    }
}

function MSStyleShadowToDictionary(shadow) {
    return {
        "color": MSColorToDictionary(shadow.color()),
        "offsetY": shadow.offsetY() * 1,
        "blurRadius": shadow.blurRadius() * 1,
        "spread": shadow.spread() * 1,
        "offsetX": shadow.offsetX() * 1,
        "contextSettings": MSGraphicsContextSettingsToDictionary(shadow.contextSettings()),
        "isEnabled": shadow.isEnabled() * 1,
    }
}

function MSStyleInnerShadowToDictionary(shadow) {
    return {
        "color": MSColorToDictionary(shadow.color()),
        "offsetY": shadow.offsetY() * 1,
        "blurRadius": shadow.blurRadius() * 1,
        "spread": shadow.spread() * 1,
        "offsetX": shadow.offsetX() * 1,
        "contextSettings": MSGraphicsContextSettingsToDictionary(shadow.contextSettings()),
        "isEnabled": shadow.isEnabled() * 1,
    }
}

function MSStyleBorderToDictionary(border) {
    return {
        "position": border.position() * 1,
        "color": MSColorToDictionary(border.color()),
        "gradient": MSGradientToDictionary(border.gradient()),
        "fillType": border.fillType() * 1,
        "thickness": border.thickness() * 1,
        "contextSettings": MSGraphicsContextSettingsToDictionary(border.contextSettings()),
        "isEnabled": border.isEnabled() * 1,
    }
}

function MSStyleBlurToDictionary(blur) {
    return {
        "motionAngle": blur.motionAngle() * 1,
        "center": CGPointToDictionary(blur.center()),
        "radius": blur.radius() * 1,
        "type": blur.type() * 1,
        "isEnabled": blur.isEnabled() * 1,
    }
}

function MSGraphicsContextSettingsToDictionary(graphicsContext) {
    return {
        "blendMode": graphicsContext.blendMode(),
        "opacity": graphicsContext.opacity()
    }
}

function CGPointToDictionary(point) {
    return {
        "x": point.x * 1,
        "y": point.y * 1
    }
}

function MSGradientToDictionary(gradient) {
    return {
        "from": CGPointToDictionary(gradient.from()),
        //"shouldSmoothenOpacity": gradient.shouldSmoothenOpacity,
        "stops": gradient.stops(),
        "to": CGPointToDictionary(gradient.to()),
        "elipseLength": gradient.elipseLength(),
        "gradientType": gradient.gradientType()
    }
}