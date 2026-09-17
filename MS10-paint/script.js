//set-up
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const layersContainer = document.getElementById("layers");

const colorInput = document.getElementById("color_input");

const viewport = document.getElementById("viewport");

const hexInput = document.getElementById("hex_code");

const colorSelectionBox = document.getElementById("color_selection_box");
const colorSelectionCtx = colorSelectionBox.getContext("2d");

const showingColor = document.getElementById("showing_color");

const colorSlider = document.getElementById("gradient_slider");

const colorMenu = document.getElementById("paint_pop-up")

const colorSelectionDot = document.getElementById("color_selection_dot");

const layersPopup = document.getElementById("layers_pop-up");

const addLayerButton = document.getElementById("add_layer");

const layerList = document.getElementById("layer_list");

const areaselectorSettings = document.getElementById("area_selector_settings");
const areaRotationOption = document.getElementById("rotate");
const areaFlipOption = document.getElementById("mirror");
const areaRotationUserDefined = document.getElementById("rotate_user_defined");

const teardropSettings = document.getElementById("teardrop_settings");
const openToolAfterTeardropping = document.getElementById("teardrop_open");

const pencilSettings = document.getElementById("pencil_settings");

const pencilSettingsSlider = document.getElementById("pencil_width_input");

const pencilSliderValue = document.getElementById("pencil_width_value");

const pencilShapeForm = document.getElementById("pencil_shape");

const colorPickerSettings = document.getElementById("color_picker_settings");
const isShowingSidebar = document.getElementById("showing_color_sidebar");

const colorSidebar = document.getElementById("paint_sidebar");

const activeColor = document.getElementById("active_color");

const colorPalletID1 = document.getElementById("saved_color_1");
const colorPalletID2 = document.getElementById("saved_color_2");
const colorPalletID3 = document.getElementById("saved_color_3");
const colorPalletID4 = document.getElementById("saved_color_4");
const colorPalletID5 = document.getElementById("saved_color_5");
const colorPalletID6 = document.getElementById("saved_color_6");
const colorPalletID7 = document.getElementById("saved_color_7");
const colorPalletID8 = document.getElementById("saved_color_8");
const colorPalletID9 = document.getElementById("saved_color_9");
const colorPalletID10 = document.getElementById("saved_color_10");

const saveCanvasButton = document.getElementById("save_canvas");

const importToCanvasButton = document.getElementById("import_to_canvas");

const layersSettings = document.getElementById("layers_settings");

const layerID = document.getElementById("active_layer");

const layerOpacitySlider = document.getElementById("layer_opacity_slider");
const layerOpacityValue = document.getElementById("layer_opacity_value");

const bucketSettings = document.getElementById("bucket_settings");

const bucketColorMatchSlider = document.getElementById("bucket_color_match_slider");
const bucketColorMatchValue = document.getElementById("bucket_color_match_value");

const bucketGradientMatchSlider = document.getElementById("bucket_gradient_match_slider");
const bucketGradientMatchValue = document.getElementById("bucket_gradient_match_value");

const eraserSettings = document.getElementById("eraser_settings");

const eraserSettingsSlider = document.getElementById("eraser_width_input");

const eraserSliderValue = document.getElementById("eraser_width_value");

const eraserShapeForm = document.getElementById("eraser_shape");

const formsSettings = document.getElementById("forms_settings");

const squareForm = document.getElementById("form_square");
const triangleForm = document.getElementById("form_triangle");
const circleForm = document.getElementById("form_circle");
const lineForm = document.getElementById("form_line");

const lineWidthSelection = document.getElementById("form_line_width");
const infillOption = document.getElementById("form_infill");
const rotateForm = document.getElementById("form_rotation");

const canvasRezisingSettings = document.getElementById("canvas_rezising_settings");

const canvasRezisingDirection = document.getElementById("canvas_rezising_direction");
const canvasRezisingAmount = document.getElementById("scale_canvas");
const canvasUserDefinedRezising = document.getElementById("scale_user_defined");

const rezisingButton = document.getElementById("scale_canvas_button");
const descaleButton = document.getElementById("descale_canvas_button");

const showingBackgroundcolor = document.getElementById("show_hide_background_picture");
const backgroundColorCanvas = document.getElementById("background_color_canvas");

const pencilToolSelection = document.getElementById("pencil_img");
const teardropToolSelection = document.getElementById("teardrop_img");
const bucketToolSelection = document.getElementById("bucket_img");
const colorPickerToolSelection = document.getElementById("color_picker_img");
const areaSelectorToolSelection = document.getElementById("area_selector_img");
const layersToolSelection = document.getElementById("layers_img");
const eraserToolSelection = document.getElementById("eraser_img");
const formsToolSelection = document.getElementById("forms_img");

const pencilToolSettings = document.getElementById("pencil");
const teardropToolSettings = document.getElementById("teardrop");
const bucketToolSettings = document.getElementById("paint_bucket");
const colorPickerToolSettings = document.getElementById("color_picker");
const areaSelectorToolSettings = document.getElementById("area_selector");
const layersToolSettings = document.getElementById("layer_selection");
const eraserToolSettings = document.getElementById("eraser");
const formsToolSettings = document.getElementById("forms");
const canvasRezising = document.getElementById("change_canvas");

const toolSettings = [];

const toolSelections = [];

const colorPallet = [];

toolSettings.push(pencilToolSettings);
setupToolSettings(pencilToolSettings);
toolSelections.push(pencilToolSelection);
selectTool(pencilToolSelection);

toolSettings.push(teardropToolSettings);
setupToolSettings(teardropToolSettings);
toolSelections.push(teardropToolSelection);
selectTool(teardropToolSelection);

toolSettings.push(bucketToolSettings);
setupToolSettings(bucketToolSettings);
toolSelections.push(bucketToolSelection);
selectTool(bucketToolSelection);

toolSettings.push(colorPickerToolSettings);
setupToolSettings(colorPickerToolSettings);
toolSelections.push(colorPickerToolSelection);
selectTool(colorPickerToolSelection);

toolSettings.push(areaSelectorToolSettings);
setupToolSettings(areaSelectorToolSettings);
toolSelections.push(areaSelectorToolSelection);
selectTool(areaSelectorToolSelection);

toolSettings.push(layersToolSettings);
setupToolSettings(layersToolSettings);

toolSettings.push(eraserToolSettings);
setupToolSettings(eraserToolSettings);
toolSelections.push(eraserToolSelection);
selectTool(eraserToolSelection);

toolSettings.push(formsToolSettings);
setupToolSettings(formsToolSettings);
toolSelections.push(formsToolSelection);
selectTool(formsToolSelection);

toolSettings.push(canvasRezising);
setupToolSettings(canvasRezising);

colorPallet.push(colorPalletID1);
selectPalletColor(colorPalletID1);

colorPallet.push(colorPalletID2);
selectPalletColor(colorPalletID2);

colorPallet.push(colorPalletID3);
selectPalletColor(colorPalletID3);

colorPallet.push(colorPalletID4);
selectPalletColor(colorPalletID4);

colorPallet.push(colorPalletID5);
selectPalletColor(colorPalletID5);

colorPallet.push(colorPalletID6);
selectPalletColor(colorPalletID6);

colorPallet.push(colorPalletID7);
selectPalletColor(colorPalletID7);

colorPallet.push(colorPalletID8);
selectPalletColor(colorPalletID8);

colorPallet.push(colorPalletID9);
selectPalletColor(colorPalletID9);

colorPallet.push(colorPalletID10);
selectPalletColor(colorPalletID10);

let selection = {
    active: false,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    image: null
};

colorMenu.classList.add("closed");
layersPopup.classList.add("closed");

let layers = [];

let activeLayer = null;

let nextLayerId = 1;

activeLayer = layers[0];

let selectedLayer = 1;

let undoStack = [];
let redoStack = [];

let isRestoringHistory = false;

const MAX_HISTORY = 50;

let historyBeforeAction = null;

let drawing = false;
let erasing = false;
let makingShape = false;
let isSelecting = false;
let isMovingSelection = false;
let colorSelectionMouseDown = false;

canvas.width = 800;
canvas.height = 800;

colorSelectionBox.width = 400;
colorSelectionBox.height = 400;

let zoom = 1;
let offsetX = 50;
let offsetY = 75;

let shapeStartX = 0;
let shapeStartY = 0;

let selectionStartX = 0;
let selectionStartY = 0;

let selectionMoveOffsetX = 0;
let selectionMoveOffsetY = 0;

let AreaRotation = 0;

let AreaUserDefinedRotation = 0;

let selectionOriginalImage = null;
let selectionOriginalWidth = 0;
let selectionOriginalHeight = 0;

let Shape = "square";

let PenSize = 5;
let PenShape = "round";

let Color = "#000000";
let actualColor = "#ffffff";
let actualPalletColor = "#ffffff";
let ColorSliderValue = 0;

let backgroundColor = "#ffffff";
let actualBackgroundColor = "#ffffff";
let backgroundSliderValue = 100;

let colorPickerTarget = "pencil";

// Palette slot currently being edited with Shift+click.
// null means the color wheel is not editing a palette slot.
let colorPickerPalletTarget = null;

let eraserSize = 10;
let eraserShape = "round";

let ShapeFill = false;
let ShapeOutline = true;
let ShapeOutlineSize = 5;
let ShapeRotation = 0;

let openTool = pencilToolSelection;
let openedColorPickerFromTeardrop = false;
let openedColorPickerFromPallet = false;

let bucketColorTolerance = 1;
let bucketGradientTolerance = 1;

let selectionClipboard = null;

let isAlreadtdoingHistory = false;

// #region code for color pallet

function selectPalletColor(palletColor) {
    palletColor.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        if (e.shiftKey && e.ctrlKey) return;

        if (e.shiftKey) {
            colorPickerPalletTarget = palletColor;
            colorPickerTarget = "pallet";

            openedColorPickerFromPallet = true;

            if (getComputedStyle(palletColor).backgroundImage !== "none") {
                palletColor.style.backgroundImage = "none";
            }

            actualPalletColor = rgbToHex(
                getComputedStyle(palletColor).backgroundColor
            );

            loadColorIntoPicker(actualPalletColor);

            colorMenu.classList.remove("closed");

            return;
        }
        if (e.ctrlKey) {
            colorPickerPalletTarget = null;
            
            if (getComputedStyle(palletColor).backgroundImage !== "none") {
                palletColor.style.backgroundImage = "none";
            }

            palletColor.style.backgroundColor = getComputedStyle(activeColor).backgroundColor;
            return;
        }

        if (getComputedStyle(palletColor).backgroundImage !== "none") return;
        
        colorPickerTarget = "pencil";
        colorPickerPalletTarget = null;

        activeColor.style.backgroundColor = getComputedStyle(palletColor).backgroundColor;

        updateColorFromPallet(palletColor);
    });
}

function updateColorFromPallet(palletColor) {

    const computedColor =
        getComputedStyle(palletColor).backgroundColor;

    // CSS should give us something like:
    // rgb(255, 0, 0)
    // or rgba(255, 0, 0, 1)

    const rgb = computedColor.match(/\d+/g);

    if (!rgb || rgb.length < 3) {
        return;
    }

    const red = Number(rgb[0]);
    const green = Number(rgb[1]);
    const blue = Number(rgb[2]);

    const selectedColorHex = "#" + [red, green, blue]
        .map(colorValue =>
            colorValue.toString(16).padStart(2, "0")
        )
        .join("");

    actualColor = selectedColorHex;

    hexInput.value = selectedColorHex;

    rgbInputs[0].value = red;
    rgbInputs[1].value = green;
    rgbInputs[2].value = blue;

    updateColorFromInputs(red, green, blue);
}

function rgbToHex(rgb) {
    const values = rgb.match(/\d+/g);

    if (!values || values.length < 3) {
        return "#000000";
    }

    return "#" + values
        .slice(0, 3)
        .map(value =>
            Number(value).toString(16).padStart(2, "0")
        )
        .join("");
}

// #endregion

// #region code for opening tool settings

function setupToolSettings(tool) {
    tool.addEventListener("click", () => {

        const isOpen = tool.classList.contains("open");

        toolSettings.forEach(otherTool => {
            otherTool.classList.remove("open");
            otherTool.classList.add("closed");
            otherTool.style.transform = "rotate(0deg)";
        });

        if (!isOpen) {
            tool.classList.remove("closed");
            tool.classList.add("open");
            tool.style.transform = "rotate(-90deg)";
        }

        if (formsToolSettings.classList.contains("open")) {
            formsSettings.classList.remove("closed");
        }
        else {
            formsSettings.classList.add("closed");
        }

        if (eraserToolSettings.classList.contains("open")) {
            eraserSettings.classList.remove("closed");
        }
        else {
            eraserSettings.classList.add("closed");
        }

        if (pencilToolSettings.classList.contains("open")) {
            pencilSettings.classList.remove("closed");
        }
        else {
            pencilSettings.classList.add("closed");
        }

        if (teardropToolSettings.classList.contains("open")) {
            teardropSettings.classList.remove("closed");
        }
        else {
            teardropSettings.classList.add("closed");
        }

        if (bucketToolSettings.classList.contains("open")) {
            bucketSettings.classList.remove("closed");
        }
        else {
            bucketSettings.classList.add("closed");
        }

        if (areaSelectorToolSettings.classList.contains("open")) {
            areaselectorSettings.classList.remove("closed");
        }
        else {
            areaselectorSettings.classList.add("closed");
        }

        if (layersToolSettings.classList.contains("open")) {
            layersSettings.classList.remove("closed");
        }
        else {
            layersSettings.classList.add("closed");
        }

        if (colorPickerToolSettings.classList.contains("open")) {
            colorPickerSettings.classList.remove("closed");
        }
        else {
            colorPickerSettings.classList.add("closed");
        }

        if (canvasRezising.classList.contains("open")) {
            canvasRezisingSettings.classList.remove("closed");
        }
        else {
            canvasRezisingSettings.classList.add("closed");
        }
    });
}

// #endregion

// #region code for area selection tool settings

areaRotationOption.addEventListener("input", () => {

    if (!selection.active || !selection.image) {
        areaRotationOption.value = "0";
        return;
    }

    let rotation = Number(areaRotationOption.value);

    if (rotation === 0) {
        return;
    }
    if (areaRotationOption.value === "user") {
        rotation = Number(AreaUserDefinedRotation);
    }
    
    beginHistoryAction();
    updateSelectionTransform(rotation);
    endHistoryAction();

    areaRotationOption.value = "0";
});

areaRotationUserDefined.addEventListener("input", () => {
    let value = Number(areaRotationUserDefined.value);
    value = Math.max(
        areaRotationUserDefined.min,
        Math.min(
            areaRotationUserDefined.max,
            value
        )
    );

    areaRotationUserDefined.value = value;

    AreaUserDefinedRotation = value;
});

areaFlipOption.addEventListener("input", () => {

    if (!selection.active || !selection.image || areaFlipOption.value === "null") {
        areaFlipOption.value = "null";
        return;
    }

    beginHistoryAction();
    updateSelectionMirror(areaFlipOption.value);
    endHistoryAction();

    areaFlipOption.value = "null";
});

function updateSelectionTransform(rotationDegrees) {

    if (!selection.active || !selection.image) {
        return;
    }

    // Save the original image the first time we rotate.
    if (!selectionOriginalImage) {

        selectionOriginalImage = new ImageData(
            new Uint8ClampedArray(selection.image.data),
            selection.image.width,
            selection.image.height
        );

        selectionOriginalWidth = selection.image.width;
        selectionOriginalHeight = selection.image.height;
    }

    // Update total rotation.
    AreaRotation += rotationDegrees;

    AreaRotation =
        ((AreaRotation % 360) + 360) % 360;

    const rotation =
        AreaRotation * Math.PI / 180;

    const oldWidth = selectionOriginalWidth;
    const oldHeight = selectionOriginalHeight;

    const sin = Math.abs(Math.sin(rotation));
    const cos = Math.abs(Math.cos(rotation));

    const newWidth = Math.ceil(
        oldWidth * cos +
        oldHeight * sin
    );

    const newHeight = Math.ceil(
        oldWidth * sin +
        oldHeight * cos
    );

    const rotatedCanvas =
        document.createElement("canvas");

    rotatedCanvas.width = newWidth;
    rotatedCanvas.height = newHeight;

    const rotatedCtx =
        rotatedCanvas.getContext("2d");

    const tempCanvas =
        document.createElement("canvas");

    tempCanvas.width = oldWidth;
    tempCanvas.height = oldHeight;

    const tempCtx =
        tempCanvas.getContext("2d");

    tempCtx.putImageData(
        selectionOriginalImage,
        0,
        0
    );

    rotatedCtx.translate(
        newWidth / 2,
        newHeight / 2
    );

    rotatedCtx.rotate(rotation);

    rotatedCtx.drawImage(
        tempCanvas,
        -oldWidth / 2,
        -oldHeight / 2
    );

    selection.image =
        rotatedCtx.getImageData(
            0,
            0,
            newWidth,
            newHeight
        );

    // Keep the selection centered at the same position.
    const centerX =
        selection.x + selection.width / 2;

    const centerY =
        selection.y + selection.height / 2;

    selection.width = newWidth;
    selection.height = newHeight;

    selection.x =
        Math.round(centerX - newWidth / 2);

    selection.y =
        Math.round(centerY - newHeight / 2);

    restoreSelectionCanvas();

    renderSelection();
}

function updateSelectionMirror(mirrorDirection) {

    if (!selection.active || !selection.image) {
        return;
    }

    const oldImage = selection.image;

    const width = oldImage.width;
    const height = oldImage.height;

    const flippedCanvas = document.createElement("canvas");
    flippedCanvas.width = width;
    flippedCanvas.height = height;

    const flippedCtx = flippedCanvas.getContext("2d");

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = width;
    tempCanvas.height = height;

    const tempCtx = tempCanvas.getContext("2d");

    tempCtx.putImageData(oldImage, 0, 0);

    flippedCtx.save();

    if (mirrorDirection === "horizontal") {

        // Flip left <-> right
        flippedCtx.translate(width, 0);
        flippedCtx.scale(-1, 1);

    }
    else if (mirrorDirection === "vertical") {

        // Flip top <-> bottom
        flippedCtx.translate(0, height);
        flippedCtx.scale(1, -1);

    }

    flippedCtx.drawImage(tempCanvas, 0, 0);

    flippedCtx.restore();

    selection.image = flippedCtx.getImageData(
        0,
        0,
        width,
        height
    );

    restoreSelectionCanvas();

    renderSelection();
}

// #endregion

// #region code for teardrop tool settings

openToolAfterTeardropping.addEventListener("input", () => {
    if (openToolAfterTeardropping.value === "pencil") {
        openTool = pencilToolSelection;
    }
    else if (openToolAfterTeardropping.value === "colorPicker") {
        openTool = colorPickerToolSelection;
    }
    else if (openToolAfterTeardropping.value === "forms") {
        openTool = formsToolSelection;
    }
    else {
        openTool = teardropToolSelection;
    }
})

// #endregion

// #region code for pencil tool settings

pencilSettingsSlider.addEventListener("input", () => {
    pencilSliderValue.textContent = pencilSettingsSlider.value + "px";
    PenSize = pencilSettingsSlider.value;
});

pencilShapeForm.addEventListener("input", () => {
    PenShape = pencilShapeForm.value;
});

// #endregion

// #region code for color wheel tool settings

isShowingSidebar.addEventListener("input", () => {
    if (isShowingSidebar.value === "showing") {
        colorSidebar.classList.remove("closed");
    }
    else {
        colorSidebar.classList.add("closed");
    }
});

// #endregion

// #region code for layer tool settings

layerOpacitySlider.addEventListener("input", () => {

    if (!activeLayer) return;

    beginHistoryAction();

    activeLayer.opacity = Number(layerOpacitySlider.value);

    layerOpacityValue.textContent =
        activeLayer.opacity + "%";

    activeLayer.canvas.style.opacity =
        activeLayer.opacity / 100;
});

// #endregion

// #region code for bucket tool settings

bucketColorMatchSlider.addEventListener("input", () => {
    bucketColorMatchValue.textContent = bucketColorMatchSlider.value;
    bucketColorTolerance = Number(bucketColorMatchSlider.value);
})

bucketGradientMatchSlider.addEventListener("input", () => {
    bucketGradientMatchValue.textContent = bucketGradientMatchSlider.value;
    bucketGradientTolerance = Number(bucketGradientMatchSlider.value);
})

// #endregion

// #region code for eraser tool settings

eraserSettingsSlider.addEventListener("input", () => {
    eraserSliderValue.textContent = eraserSettingsSlider.value + "px";
    eraserSize = eraserSettingsSlider.value;
});

eraserShapeForm.addEventListener("input", () => {
    eraserShape = eraserShapeForm.value;
});

// #endregion

// #region code for forms tool settings

squareForm.addEventListener("click", () => {
    Shape = "square";
});

circleForm.addEventListener("click", () => {
    Shape = "circle";
});

triangleForm.addEventListener("click", () => {
    Shape = "triangle";
});

lineForm.addEventListener("click", () => {
    Shape = "line";
});

// #endregion

// #region code for scaling canvas

canvasUserDefinedRezising.addEventListener("input", () => {
    let value = Number(canvasUserDefinedRezising.value);
    value = Math.max(
        canvasUserDefinedRezising.min,
        Math.min(
            canvasUserDefinedRezising.max,
            value
        )
    );

    canvasUserDefinedRezising.value = value;
});

rezisingButton.addEventListener("mousedown", (e) => {

    if (e.button !== 0) return;

    // --------------------------------------------------
    // Get resize amount
    // --------------------------------------------------

    let amount = Number(canvasRezisingAmount.value);

    // "user defined"
    if (canvasRezisingAmount.value === "0") {
        amount = Number(canvasUserDefinedRezising.value);
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        return;
    }

    // --------------------------------------------------
    // Get direction
    // --------------------------------------------------

    const direction =
        Number(canvasRezisingDirection.value);

    // --------------------------------------------------
    // Calculate new canvas size and content offset
    // --------------------------------------------------

    let newWidth = canvas.width;
    let newHeight = canvas.height;

    let offsetContentX = 0;
    let offsetContentY = 0;

    switch (direction) {

        // ----------------------------------------------
        // RIGHT
        // ----------------------------------------------
        case 0:
            newWidth += amount;
            break;


        // ----------------------------------------------
        // DOWN-RIGHT
        // ----------------------------------------------
        case 45:
            newWidth += amount;
            newHeight += amount;
            break;


        // ----------------------------------------------
        // DOWN
        // ----------------------------------------------
        case 90:
            newHeight += amount;
            break;


        // ----------------------------------------------
        // DOWN-LEFT
        // ----------------------------------------------
        case 135:
            newWidth += amount;
            newHeight += amount;

            // Keep old image on the right side
            offsetContentX = amount;
            break;


        // ----------------------------------------------
        // LEFT
        // ----------------------------------------------
        case 180:
            newWidth += amount;

            // Move old image right
            offsetContentX = amount;
            break;


        // ----------------------------------------------
        // UP-LEFT
        // ----------------------------------------------
        case 225:
            newWidth += amount;
            newHeight += amount;

            // Move old image right and down
            offsetContentX = amount;
            offsetContentY = amount;
            break;


        // ----------------------------------------------
        // UP
        // ----------------------------------------------
        case 270:
            newHeight += amount;

            // Move old image down
            offsetContentY = amount;
            break;


        // ----------------------------------------------
        // UP-RIGHT
        // ----------------------------------------------
        case 315:
            newWidth += amount;
            newHeight += amount;

            // Move old image down
            offsetContentY = amount;
            break;


        default:
            return;
    }

    // --------------------------------------------------
    // Start undo history
    // --------------------------------------------------

    beginHistoryAction();

    // --------------------------------------------------
    // Resize every layer
    // --------------------------------------------------

    layers.forEach(layer => {

        // Save the current layer pixels
        const oldImage = layer.ctx.getImageData(
            0,
            0,
            layer.canvas.width,
            layer.canvas.height
        );

        // Create a temporary canvas containing the
        // old layer.
        const tempCanvas = document.createElement("canvas");

        tempCanvas.width = layer.canvas.width;
        tempCanvas.height = layer.canvas.height;

        const tempCtx = tempCanvas.getContext("2d");

        tempCtx.putImageData(oldImage, 0, 0);

        // Resize the actual layer canvas.
        layer.canvas.width = newWidth;
        layer.canvas.height = newHeight;

        // Re-acquire context after resizing.
        layer.ctx = layer.canvas.getContext("2d");

        // Draw old contents at the appropriate offset.
        layer.ctx.drawImage(
            tempCanvas,
            offsetContentX,
            offsetContentY
        );

        // Keep layer transform.
        layer.canvas.style.transform =
            `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;

        // Update preview.
        updateLayerPreview(layer);
    });

    // --------------------------------------------------
    // Resize the main canvas
    // --------------------------------------------------

    canvas.width = newWidth;
    canvas.height = newHeight;

    // --------------------------------------------------
    // Update background canvas / display
    // --------------------------------------------------

    backgroundColorCanvas.width = newWidth;
    backgroundColorCanvas.height = newHeight;

    // --------------------------------------------------
    // Update selection state
    // --------------------------------------------------

    // A selection's coordinates are based on the old
    // canvas, so it is safest to clear it after resizing.
    selection.active = false;
    selection.image = null;
    selectionCanvasBackup = null;

    selectionOriginalImage = null;
    selectionOriginalWidth = 0;
    selectionOriginalHeight = 0;
    AreaRotation = 0;

    // --------------------------------------------------
    // Update transforms
    // --------------------------------------------------

    canvas.style.transform =
        `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;

    updateExtraLayerTransforms();

    // --------------------------------------------------
    // Finish undo history
    // --------------------------------------------------

    endHistoryAction();

});

descaleButton.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    // --------------------------------------------------
    // Get descale amount
    // --------------------------------------------------

    let amount = Number(canvasRezisingAmount.value);

    // User defined amount
    if (canvasRezisingAmount.value === "0") {
        amount = Number(canvasUserDefinedRezising.value);
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        return;
    }


    // --------------------------------------------------
    // Get direction
    // --------------------------------------------------

    const direction =
        Number(canvasRezisingDirection.value);


    // --------------------------------------------------
    // Check whether the canvas can become smaller
    // --------------------------------------------------

    let newWidth = canvas.width;
    let newHeight = canvas.height;

    switch (direction) {

        // RIGHT
        case 0:
            newWidth -= amount;
            break;

        // DOWN-RIGHT
        case 45:
            newWidth -= amount;
            newHeight -= amount;
            break;

        // DOWN
        case 90:
            newHeight -= amount;
            break;

        // DOWN-LEFT
        case 135:
            newWidth -= amount;
            newHeight -= amount;
            break;

        // LEFT
        case 180:
            newWidth -= amount;
            break;

        // UP-LEFT
        case 225:
            newWidth -= amount;
            newHeight -= amount;
            break;

        // UP
        case 270:
            newHeight -= amount;
            break;

        // UP-RIGHT
        case 315:
            newWidth -= amount;
            newHeight -= amount;
            break;

        default:
            return;
    }


    // --------------------------------------------------
    // Don't allow 0px or negative dimensions
    // --------------------------------------------------

    if (newWidth <= 0 || newHeight <= 0) {

        alert(
            "Cannot descale the canvas.\n\n" +
            "The canvas would become 0px or smaller."
        );

        return;
    }


    // --------------------------------------------------
    // Calculate where the old image needs to move
    // --------------------------------------------------

    let offsetContentX = 0;
    let offsetContentY = 0;


    switch (direction) {

        // ----------------------------------------------
        // RIGHT
        // ----------------------------------------------
        case 0:
            // Remove pixels from the right.
            // No movement needed.
            break;


        // ----------------------------------------------
        // DOWN-RIGHT
        // ----------------------------------------------
        case 45:
            // Remove pixels from right and bottom.
            // No movement needed.
            break;


        // ----------------------------------------------
        // DOWN
        // ----------------------------------------------
        case 90:
            // Remove pixels from bottom.
            // No movement needed.
            break;


        // ----------------------------------------------
        // DOWN-LEFT
        // ----------------------------------------------
        case 135:
            // Removing the left side means the old
            // contents need to move LEFT.
            offsetContentX = -amount;
            break;


        // ----------------------------------------------
        // LEFT
        // ----------------------------------------------
        case 180:
            // Remove pixels from left.
            offsetContentX = -amount;
            break;


        // ----------------------------------------------
        // UP-LEFT
        // ----------------------------------------------
        case 225:
            // Remove pixels from left and top.
            offsetContentX = -amount;
            offsetContentY = -amount;
            break;


        // ----------------------------------------------
        // UP
        // ----------------------------------------------
        case 270:
            // Remove pixels from top.
            offsetContentY = -amount;
            break;


        // ----------------------------------------------
        // UP-RIGHT
        // ----------------------------------------------
        case 315:
            // Remove pixels from top.
            offsetContentY = -amount;
            break;
    }


    // --------------------------------------------------
    // Begin undo history
    // --------------------------------------------------

    beginHistoryAction();


    // --------------------------------------------------
    // Resize every layer
    // --------------------------------------------------

    layers.forEach(layer => {

        // Save current layer
        const oldImage = layer.ctx.getImageData(
            0,
            0,
            layer.canvas.width,
            layer.canvas.height
        );


        // Temporary canvas containing old layer
        const tempCanvas =
            document.createElement("canvas");

        tempCanvas.width = layer.canvas.width;
        tempCanvas.height = layer.canvas.height;

        const tempCtx =
            tempCanvas.getContext("2d");

        tempCtx.putImageData(
            oldImage,
            0,
            0
        );


        // Resize layer
        layer.canvas.width = newWidth;
        layer.canvas.height = newHeight;


        // Get the new context
        layer.ctx =
            layer.canvas.getContext("2d");


        // Draw old image at its new position
        layer.ctx.drawImage(
            tempCanvas,
            offsetContentX,
            offsetContentY
        );


        // Keep zoom/pan transform
        layer.canvas.style.transform =
            `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;


        // Update layer preview
        updateLayerPreview(layer);
    });


    // --------------------------------------------------
    // Resize main canvas
    // --------------------------------------------------

    canvas.width = newWidth;
    canvas.height = newHeight;


    // --------------------------------------------------
    // Clear selection
    // --------------------------------------------------

    selection.active = false;
    selection.image = null;

    selectionCanvasBackup = null;

    selectionOriginalImage = null;
    selectionOriginalWidth = 0;
    selectionOriginalHeight = 0;

    AreaRotation = 0;


    // --------------------------------------------------
    // Update transforms
    // --------------------------------------------------

    canvas.style.transform =
        `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;

    updateExtraLayerTransforms();


    // --------------------------------------------------
    // Finish undo history
    // --------------------------------------------------

    endHistoryAction();
});

// #endregion

// #region code for selecting tool

function selectTool(tool) {
    tool.addEventListener("click", () => {
        getTool(tool);
    });
}

layersToolSelection.addEventListener("click", () => {
    layersToolSelection.classList.toggle("selected");
    
    if (layersToolSelection.classList.contains("selected")) {
        layersPopup.classList.remove("closed");
    }
    if (!layersToolSelection.classList.contains("selected")) {
        layersPopup.classList.add("closed");
    }
});

function getTool(tool) {
    stopSelection();
    toolSelections.forEach(otherTool => {
        otherTool.classList.remove("selected");
    });

    tool.classList.add("selected");

    if (colorPickerToolSelection.classList.contains("selected")) {
        colorPickerTarget = "pencil";
        colorPickerPalletTarget = null;
        loadColorIntoPicker(actualColor);
        colorMenu.classList.remove("closed");
    }
    if (!colorPickerToolSelection.classList.contains("selected")) {
        colorMenu.classList.add("closed");
    }
}

viewport.addEventListener("click", (event) => {
    if (
        colorMenu.classList.contains("closed") ||
        colorMenu.contains(event.target) ||
        colorPickerToolSelection.contains(event.target)
    ) {
        return;
    }

    if (openedColorPickerFromTeardrop) {
        openedColorPickerFromTeardrop = false;
        return;
    }

    if (openedColorPickerFromPallet) {
        openedColorPickerFromPallet = false;
        return;
    }

    getTool(pencilToolSelection);
});

// #endregion

// #region code for undo and redo functionality

function captureState() {

    const state = {
        layers: [],
        activeLayerId: activeLayer ? activeLayer.id : null,

        nextLayerId: nextLayerId,

        Color: Color,
        actualColor: actualColor,
        ColorSliderValue: ColorSliderValue,

        backgroundColor: backgroundColor,
        actualBackgroundColor: actualBackgroundColor,
        backgroundSliderValue: backgroundSliderValue,

        canvasWidth: canvas.width,
        canvasHeight: canvas.height
    };

    layers.forEach(layer => {

        let imageData;

        if (
            layer === activeLayer &&
            selectionCanvasBackup &&
            (selection.active || isSelecting || isMovingSelection)
        ) {

            imageData = new ImageData(
                new Uint8ClampedArray(selectionCanvasBackup.data),
                selectionCanvasBackup.width,
                selectionCanvasBackup.height
            );

            if (selection.active && selection.image) {

                const x = Math.floor(selection.x);
                const y = Math.floor(selection.y);

                for (let sy = 0; sy < selection.image.height; sy++) {

                    for (let sx = 0; sx < selection.image.width; sx++) {

                        const targetX = x + sx;
                        const targetY = y + sy;

                        // Ignore pixels outside the canvas.
                        if (
                            targetX < 0 ||
                            targetX >= layer.canvas.width ||
                            targetY < 0 ||
                            targetY >= layer.canvas.height
                        ) {
                            continue;
                        }
                        
                        const sourceIndex =
                            (sy * selection.image.width + sx) * 4;

                        const targetIndex =
                            (targetY * layer.canvas.width + targetX) * 4;

                        const alpha =
                            selection.image.data[sourceIndex + 3];

                        // Ignore transparent/invisible pixels.
                        if (alpha === 0) {
                            continue;
                        }

                        imageData.data[targetIndex] =
                            selection.image.data[sourceIndex];

                        imageData.data[targetIndex + 1] =
                            selection.image.data[sourceIndex + 1];

                        imageData.data[targetIndex + 2] =
                            selection.image.data[sourceIndex + 2];

                        imageData.data[targetIndex + 3] =
                            selection.image.data[sourceIndex + 3];
                    }
                }
            }

        } else {

            // Normal layer: just copy its current pixels.
            const currentImageData = layer.ctx.getImageData(
                0,
                0,
                layer.canvas.width,
                layer.canvas.height
            );

            imageData = new ImageData(
                new Uint8ClampedArray(currentImageData.data),
                currentImageData.width,
                currentImageData.height
            );
        }

        state.layers.push({
            id: layer.id,
            name: layer.name,
            hidden: layer.hidden,
            opacity: layer.opacity,
            imageData: imageData
        });
    });

    return state;
}

function beginHistoryAction() {

    if (isRestoringHistory) return;
    if (isAlreadtdoingHistory) return;

    isAlreadtdoingHistory = true

    historyBeforeAction = captureState();
}

function endHistoryAction() {

    if (isRestoringHistory) return;
    if (!historyBeforeAction) return;

    if (areaSelectorToolSelection.classList.contains("selected")) {
    }

    undoStack.push(historyBeforeAction);

    if (undoStack.length > MAX_HISTORY) {
        undoStack.shift();
    }

    redoStack = [];

    historyBeforeAction = null;
    isAlreadtdoingHistory = false;
}

function restoreState(state) {
    isRestoringHistory = true;

    canvas.width = state.canvasWidth;
    canvas.height = state.canvasHeight;

    // Remove current layer canvases
    layers.forEach(layer => {
        layer.canvas.remove();
    });

    // Remove current layer UI
    document.querySelectorAll(".layer_box").forEach(box => {
        if (!(box instanceof HTMLButtonElement)) {
            box.remove();
        }
    });

    layers = [];

    // Restore layers
    state.layers.forEach(savedLayer => {

        const layerCanvas = document.createElement("canvas");

        layerCanvas.width = canvas.width;
        layerCanvas.height = canvas.height;

        layerCanvas.classList.add("layer");

        layerCanvas.style.transform =
            `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;

        layerCanvas.style.pointerEvents = "none";

        const layerCtx = layerCanvas.getContext("2d");

        layerCtx.putImageData(
            new ImageData(
                new Uint8ClampedArray(savedLayer.imageData.data),
                savedLayer.imageData.width,
                savedLayer.imageData.height
            ),
            0,
            0
        );

        const layerPreview = document.createElement("canvas");

        layerPreview.classList.add("layer_canvas");

        const layer = {
            id: savedLayer.id,
            name: savedLayer.name,
            canvas: layerCanvas,
            ctx: layerCtx,
            preview: layerPreview,
            hidden: savedLayer.hidden,
            opacity: savedLayer.opacity ?? 100
        };

        layers.push(layer);

        layersContainer.appendChild(layerCanvas);

        createLayerUI(layer);
    });

    nextLayerId = state.nextLayerId;

    Color = state.Color;
    actualColor = state.actualColor;
    ColorSliderValue = state.ColorSliderValue;

    backgroundColor = state.backgroundColor;
    actualBackgroundColor = state.actualBackgroundColor;
    backgroundSliderValue = state.backgroundSliderValue;

    canvas.style.backgroundColor = backgroundColor;
    backgroundColorCanvas.style.backgroundColor = backgroundColor;

    updateLayerOrder();

    updateLayerUI();

    if (state.activeLayerId !== null) {

        const restoredActiveLayer =
            layers.find(layer => layer.id === state.activeLayerId);

        if (restoredActiveLayer) {
            selectLayer(restoredActiveLayer);
        }
    }

    layers.forEach(layer => {

        layer.canvas.style.visibility =
            layer.hidden ? "hidden" : "visible";

        updateLayerPreview(layer);
    });

    updateDeleteLayerButtons();

    isRestoringHistory = false;
}

function undo() {

    if (undoStack.length === 0) return;

    if (areaSelectorToolSelection.classList.contains("selected")) {
        stopSelection();
    }

    redoStack.push(captureState());

    const previousState = undoStack.pop();

    restoreState(previousState);
}

function redo() {

    if (redoStack.length === 0) return;

    // Save current state so we can undo the redo.
    undoStack.push(captureState());

    const nextState = redoStack.pop();

    restoreState(nextState);
}

document.addEventListener("keydown", event => {

    const modifier = event.ctrlKey || event.metaKey;

    if (!modifier) return;

    if (event.key.toLowerCase() === "z") {

        event.preventDefault();

        if (event.ctrlKey) {
            undo();
        }

        return;
    }

    if (event.key.toLowerCase() === "y") {

        event.preventDefault();

        if (event.ctrlKey) {
            redo();
        }

        return;
    }
});

viewport.addEventListener("mouseup", () => {
    endHistoryAction();
});

// #endregion

// #region code for erasing on the canvas (eraser tool functions)

canvas.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    if (!eraserToolSelection.classList.contains("selected")) return;
    if (!activeLayer) return;
    if (activeLayer.hidden === true) return;
    beginHistoryAction();
    erasing = true;

    const pos = getMousePos(e);

    activeLayer.ctx.beginPath();
    activeLayer.ctx.moveTo(pos.x, pos.y);
});

canvas.addEventListener("mouseup", () => {
    erasing = false;
    activeLayer.ctx.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
    if (!erasing) return;

    const pos = getMousePos(e);

    activeLayer.ctx.lineWidth = eraserSize;
    activeLayer.ctx.lineCap = PenShape;

    activeLayer.ctx.globalCompositeOperation = "destination-out";

    activeLayer.ctx.lineTo(pos.x, pos.y);
    activeLayer.ctx.stroke();
});

// #endregion

// #region code for selecting color (color picker tool functions)

function loadColorIntoPicker(color) {
    if (!color || color.length !== 7) return;

    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    // Update the visible inputs
    hexInput.value = color;

    rgbInputs[0].value = r;
    rgbInputs[1].value = g;
    rgbInputs[2].value = b;

    // Update the color picker position
    const { h, s, v } = rgbToHsv(r, g, b);

    colorSelectionDot.style.left = `${(h / 360) * 100}%`;
    colorSelectionDot.style.top = `${(1 - s) * 100}%`;

    // The slider represents brightness/value
    colorSlider.value =
        colorPickerTarget === "background"
            ? backgroundSliderValue
            : ColorSliderValue;


    // Make sure the slider gradient and displayed color are updated
    updateColorSlider();
}

function drawColorSelectionBox() {
    const colorSelectionWidth = colorSelectionBox.width;
    const colorSelectionHeight = colorSelectionBox.height;
    const colorSelectionImage = colorSelectionCtx.createImageData(
        colorSelectionWidth,
        colorSelectionHeight
    );

    for (let y = 0; y < colorSelectionHeight; y++) {
        const colorSelectionVertical = y / (colorSelectionHeight - 1);

        for (let x = 0; x < colorSelectionWidth; x++) {
            const colorSelectionHue = x / (colorSelectionWidth - 1);

            // RGB hue
            const colorSelectionH = colorSelectionHue * 6;
            const colorSelectionI = Math.floor(colorSelectionH);
            const colorSelectionF = colorSelectionH - colorSelectionI;
            const colorSelectionQ = 1 - colorSelectionF;

            let r, g, b;

            switch (colorSelectionI) {
                case 0: r = 1; g = colorSelectionF; b = 0; break;
                case 1: r = colorSelectionQ; g = 1; b = 0; break;
                case 2: r = 0; g = 1; b = colorSelectionF; break;
                case 3: r = 0; g = colorSelectionQ; b = 1; break;
                case 4: r = colorSelectionF; g = 0; b = 1; break;
                default: r = 1; g = 0; b = colorSelectionQ;
            }

            // Fade towards white
            r = Math.round((r + (1 - r) * colorSelectionVertical) * 255);
            g = Math.round((g + (1 - g) * colorSelectionVertical) * 255);
            b = Math.round((b + (1 - b) * colorSelectionVertical) * 255);

            const colorSelectionPixelIndex =
                (y * colorSelectionWidth + x) * 4;

            colorSelectionImage.data[colorSelectionPixelIndex] = r;
            colorSelectionImage.data[colorSelectionPixelIndex + 1] = g;
            colorSelectionImage.data[colorSelectionPixelIndex + 2] = b;
            colorSelectionImage.data[colorSelectionPixelIndex + 3] = 255;
        }
    }

    colorSelectionCtx.putImageData(colorSelectionImage, 0, 0);
}

drawColorSelectionBox();

function selectColorFromSelectionBox(e) {
    const colorSelectionRect = colorSelectionBox.getBoundingClientRect();

    let colorSelectionX = Math.floor(
        (e.clientX - colorSelectionRect.left) *
        colorSelectionBox.width /
        colorSelectionRect.width
    );

    let colorSelectionY = Math.floor(
        (e.clientY - colorSelectionRect.top) *
        colorSelectionBox.height /
        colorSelectionRect.height
    );

    // Keep the selection inside the canvas
    colorSelectionX = Math.max(
        0,
        Math.min(colorSelectionBox.width - 1, colorSelectionX)
    );

    colorSelectionY = Math.max(
        0,
        Math.min(colorSelectionBox.height - 1, colorSelectionY)
    );

    const [r, g, b] = colorSelectionCtx
        .getImageData(colorSelectionX, colorSelectionY, 1, 1)
        .data;

    const selectedColorHex = "#" + [r, g, b]
        .map(colorValue =>
            colorValue.toString(16).padStart(2, "0")
        )
        .join("");

    // New base color
    if (colorPickerTarget === "pallet") {
        actualPalletColor = selectedColorHex;

        if (colorPickerPalletTarget) {
            colorPickerPalletTarget.style.backgroundColor =
                selectedColorHex;
        }
    }
    else if (colorPickerTarget === "background") {
        actualBackgroundColor = selectedColorHex;
    }
    else {
        actualColor = selectedColorHex;
        activeColor.style.backgroundColor =
            selectedColorHex;
    }

    hexInput.value = selectedColorHex;

    rgbInputs[0].value = r;
    rgbInputs[1].value = g;
    rgbInputs[2].value = b;

    colorSelectionDot.style.left =
        `${(colorSelectionX / colorSelectionBox.width) * 100}%`;

    colorSelectionDot.style.top =
        `${(colorSelectionY / colorSelectionBox.height) * 100}%`;

    // Keep the slider's current value effective
    updateColorSlider();
}

// Mouse button pressed
colorSelectionBox.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    beginHistoryAction();
    colorSelectionMouseDown = true;
    selectColorFromSelectionBox(e);
});

// Mouse moves while button is held
colorSelectionBox.addEventListener("mousemove", (e) => {
    if (!colorSelectionMouseDown) return;

    selectColorFromSelectionBox(e);
});

// Mouse button released anywhere
document.addEventListener("mouseup", () => {
    colorSelectionMouseDown = false;
});

function rgbToHsv(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const difference = max - min;

    let h = 0;
    let s = max === 0 ? 0 : difference / max;
    const v = max;

    if (difference !== 0) {
        switch (max) {
            case r:
                h = ((g - b) / difference) % 6;
                break;

            case g:
                h = (b - r) / difference + 2;
                break;

            case b:
                h = (r - g) / difference + 4;
                break;
        }

        h *= 60;

        if (h < 0) {
            h += 360;
        }
    }

    return { h, s, v };
}

function updateColorFromInputs(r, g, b) {
    // Make sure values are valid
    r = Math.max(0, Math.min(255, Number(r)));
    g = Math.max(0, Math.min(255, Number(g)));
    b = Math.max(0, Math.min(255, Number(b)));

    if (r === 0 && g === 0 && b === 0) {

        if (colorPickerTarget === "background") {
            actualBackgroundColor = "#ffffff";
        }
        else {
            actualColor = "#ffffff";
        }

        colorSlider.value = 0;

        updateColorSlider();

        return;
    }

    const { h, s, v } = rgbToHsv(r, g, b);

    const dotX = h / 360;
    const dotY = 1 - s;

    colorSelectionDot.style.left = `${dotX * 100}%`;
    colorSelectionDot.style.top = `${dotY * 100}%`;

    let baseR = 0;
    let baseG = 0;
    let baseB = 0;

    if (v > 0) {
        baseR = Math.round((r / (v * 255)) * 255);
        baseG = Math.round((g / (v * 255)) * 255);
        baseB = Math.round((b / (v * 255)) * 255);
    }

    const baseColor = "#" + [baseR, baseG, baseB]
        .map(value => value.toString(16).padStart(2, "0"))
        .join("");

    if (colorPickerTarget === "background") {
        actualBackgroundColor = baseColor;
    }
    else {
        actualColor = baseColor;
        
        activeColor.style.backgroundColor =
            baseColor;
    }

    colorSlider.value = Math.round(v * 100);

    updateColorSlider();
}

hexInput.addEventListener("input", () => {
    let hexInputValue = hexInput.value;

    // Always start with #
    if (!hexInputValue.startsWith("#")) {
        hexInputValue = "#" + hexInputValue;
    }

    // Remove anything that isn't hexadecimal
    hexInputValue =
        "#" + hexInputValue
            .slice(1)
            .replace(/[^0-9a-fA-F]/g, "");

    // Maximum 6 hex characters
    hexInputValue = hexInputValue.slice(0, 7);

    hexInput.value = hexInputValue;

    if (hexInputValue.length === 7) {
        beginHistoryAction();
        const r = parseInt(hexInputValue.slice(1, 3), 16);
        const g = parseInt(hexInputValue.slice(3, 5), 16);
        const b = parseInt(hexInputValue.slice(5, 7), 16);

        updateColorFromInputs(r, g, b);
        endHistoryAction();
    }
});

const rgbInputs = [
    document.getElementById("rød"),
    document.getElementById("grøn"),
    document.getElementById("blå")
];

rgbInputs.forEach(input => {
    input.addEventListener("input", () => {
        let rgbInputValue = input.value;

        // Maximum 3 digits
        rgbInputValue = rgbInputValue.slice(0, 3);

        // Maximum value of 255
        if (Number(rgbInputValue) > 255) {
            rgbInputValue = "255";
        }
        else if (rgbInputValue.length > 1 && rgbInputValue.startsWith("0")) {
            rgbInputValue = rgbInputValue.slice(1);
        }
        else if (input.value == 0) {
            rgbInputValue = "0";
        }

        input.value = rgbInputValue;
        
        const r = Number(rgbInputs[0].value);
        const g = Number(rgbInputs[1].value);
        const b = Number(rgbInputs[2].value);

        updateColorFromInputs(r, g, b);
    });
});

function updateColorSlider() {
    // Get the currently selected color
    let selectedColor;

    if (colorPickerTarget === "background") {
        selectedColor = actualBackgroundColor;
    }
    else if (colorPickerTarget === "pallet") {
        selectedColor = actualPalletColor;
    }
    else {
        selectedColor = actualColor;
    }

    // Make the slider go from the selected color to black
    colorSlider.style.background = `linear-gradient(
        ${selectedColor},
        #000000
    )`;
    updateColorFromSlider();
}

function updateColorFromSlider() {
    const darkness = 1 - (Number(colorSlider.value) / 100);

    let hex;

    if (colorPickerTarget === "background") {
        hex = actualBackgroundColor;
    }
    else if (colorPickerTarget === "pallet") {
        if (!colorPickerPalletTarget) return;
        hex = actualPalletColor;
    }
    else {
        hex = actualColor;
    }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const newR = Math.round(r * (1 - darkness));
    const newG = Math.round(g * (1 - darkness));
    const newB = Math.round(b * (1 - darkness));

    const darkenedColor = "#" + [newR, newG, newB]
        .map(value => value.toString(16).padStart(2, "0"))
        .join("");

    // Color = final displayed color
    if (colorPickerTarget === "background") {
        backgroundColor = darkenedColor;
        backgroundSliderValue = colorSlider.value;
        canvas.style.backgroundColor = darkenedColor;
    }
    else if (colorPickerTarget === "pallet") {
        if (colorPickerPalletTarget) {
            colorPickerPalletTarget.style.backgroundColor =
                darkenedColor;
        }
    }
    else {
        Color = darkenedColor;
        ColorSliderValue = colorSlider.value;
        activeColor.style.backgroundColor =
            darkenedColor;
    }
    hexInput.value = darkenedColor;

    const finalR = parseInt(darkenedColor.slice(1, 3), 16);
    const finalG = parseInt(darkenedColor.slice(3, 5), 16);
    const finalB = parseInt(darkenedColor.slice(5, 7), 16);

    rgbInputs[0].value = finalR;
    rgbInputs[1].value = finalG;
    rgbInputs[2].value = finalB;

    if (colorPickerTarget === "background") {
        backgroundColorCanvas.style.backgroundColor = darkenedColor;
    }
    showingColor.style.backgroundColor = darkenedColor;
}

colorSlider.addEventListener("input", () => {
    beginHistoryAction();
    updateColorFromSlider();
});

updateColorFromSlider();

// #endregion

// #region code for filling a area with color (paint bucket tool functions)

function bucketFill(e, hex) {

    const rect = activeLayer.canvas.getBoundingClientRect();

    const x = Math.floor(
        (e.clientX - rect.left) *
        (activeLayer.canvas.width / rect.width)
    );

    const y = Math.floor(
        (e.clientY - rect.top) *
        (activeLayer.canvas.height / rect.height)
    );

    // Make sure the click is inside the canvas.
    if (
        x < 0 ||
        x >= activeLayer.canvas.width ||
        y < 0 ||
        y >= activeLayer.canvas.height
    ) {
        return;
    }

    const image = activeLayer.ctx.getImageData(
        0,
        0,
        activeLayer.canvas.width,
        activeLayer.canvas.height
    );

    const data = image.data;

    const width = activeLayer.canvas.width;
    const height = activeLayer.canvas.height;

    // --------------------------------------------------
    // Color that was clicked
    // --------------------------------------------------

    const startIndex = (y * width + x) * 4;

    const targetR = data[startIndex];
    const targetG = data[startIndex + 1];
    const targetB = data[startIndex + 2];
    const targetA = data[startIndex + 3];

    // --------------------------------------------------
    // Fill color
    // --------------------------------------------------

    const newColor = hexToRgba(hex);

    // Nothing to do if the colors are identical.
    if (
        targetR === newColor[0] &&
        targetG === newColor[1] &&
        targetB === newColor[2] &&
        targetA === newColor[3]
    ) {
        return;
    }

    // --------------------------------------------------
    // Slider values
    // --------------------------------------------------

    const colorTolerance = Number(bucketColorTolerance);
    const gradientTolerance = Number(bucketGradientTolerance);

    /*
     * RGB tolerance:
     *
     * 0 = exact RGB match
     * 10 = +/- 10 for each RGB channel
     * 100 = +/- 100 for each RGB channel
     */

    const minR = Math.max(0, targetR - colorTolerance);
    const maxR = Math.min(255, targetR + colorTolerance);

    const minG = Math.max(0, targetG - colorTolerance);
    const maxG = Math.min(255, targetG + colorTolerance);

    const minB = Math.max(0, targetB - colorTolerance);
    const maxB = Math.min(255, targetB + colorTolerance);

    /*
     * Gradient tolerance:
     *
     * The clicked pixel's brightness is converted to
     * a 0-100 value.
     *
     * Then we allow +/- gradientTolerance.
     *
     * The range is CLAMPED to 0-100.
     *
     * It does NOT wrap around.
     */

    const targetBrightness = rgbToBrightness(
        targetR,
        targetG,
        targetB
    );

    const minBrightness = Math.max(
        0,
        targetBrightness - gradientTolerance
    );

    const maxBrightness = Math.min(
        100,
        targetBrightness + gradientTolerance
    );

    // --------------------------------------------------
    // Flood fill
    // --------------------------------------------------

    const stack = [[x, y]];

    const visited = new Uint8Array(
        width * height
    );

    while (stack.length > 0) {

        const [px, py] = stack.pop();

        if (
            px < 0 ||
            px >= width ||
            py < 0 ||
            py >= height
        ) {
            continue;
        }

        const pixelPosition = py * width + px;

        if (visited[pixelPosition]) {
            continue;
        }

        visited[pixelPosition] = 1;

        const index = pixelPosition * 4;

        const r = data[index];
        const g = data[index + 1];
        const b = data[index + 2];
        const a = data[index + 3];

        // Alpha must match.
        if (a !== targetA) {
            continue;
        }

        // --------------------------------------------------
        // RGB matching
        // --------------------------------------------------

        const rgbMatches =
            r >= minR &&
            r <= maxR &&
            g >= minG &&
            g <= maxG &&
            b >= minB &&
            b <= maxB;

        if (!rgbMatches) {
            continue;
        }

        // --------------------------------------------------
        // Gradient matching
        // --------------------------------------------------

        const brightness = rgbToBrightness(r, g, b);

        const gradientMatches =
            brightness >= minBrightness &&
            brightness <= maxBrightness;

        if (!gradientMatches) {
            continue;
        }

        // --------------------------------------------------
        // Fill pixel
        // --------------------------------------------------

        data[index] = newColor[0];
        data[index + 1] = newColor[1];
        data[index + 2] = newColor[2];
        data[index + 3] = newColor[3];

        // --------------------------------------------------
        // Check neighboring pixels
        // --------------------------------------------------

        stack.push([px + 1, py]);
        stack.push([px - 1, py]);
        stack.push([px, py + 1]);
        stack.push([px, py - 1]);
    }

    // Apply the result.
    activeLayer.ctx.putImageData(image, 0, 0);
}

function hexToRgba(hex) {

    hex = hex.replace("#", "");

    return [
        parseInt(hex.substring(0, 2), 16),
        parseInt(hex.substring(2, 4), 16),
        parseInt(hex.substring(4, 6), 16),
        255
    ];
}

function rgbToHsl(r, g, b) {

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {

        const difference = max - min;

        s =
            l > 0.5
                ? difference / (2 - max - min)
                : difference / (max + min);

        switch (max) {

            case r:
                h =
                    (g - b) / difference +
                    (g < b ? 6 : 0);
                break;

            case g:
                h =
                    (b - r) / difference +
                    2;
                break;

            case b:
                h =
                    (r - g) / difference +
                    4;
                break;
        }

        h /= 6;
    }

    return {
        h: h * 360,
        s: s * 100,
        l: l * 100
    };
}

function rgbToBrightness(r, g, b) {
    const max = Math.max(r, g, b);

    return (max / 255) * 100;
}

canvas.addEventListener("mousedown", (e) => {
    if (!bucketToolSelection.classList.contains("selected")) return;
    if (!activeLayer) return;
    if (activeLayer.hidden === true) return;
    if (e.button !== 0) return;
    beginHistoryAction();
    bucketFill(e, Color);
    updateLayerPreview(activeLayer);
});

// #endregion

// #region code for picking a color on the canvas (teardrop tool functions)

function echoColor(e){
	const rect = activeLayer.canvas.getBoundingClientRect();

    const x = (e.clientX - rect.left) * (activeLayer.canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (activeLayer.canvas.height / rect.height);

    const imgData = activeLayer.ctx.getImageData(
        Math.floor(x),
        Math.floor(y),
        1,
        1
    );

    const red = imgData.data[0];
    const green = imgData.data[1];
    const blue = imgData.data[2];

    const selectedColorHex = "#" + [red, green, blue]
        .map(colorValue =>
            colorValue.toString(16).padStart(2, "0")
        )
        .join("");

    actualColor = selectedColorHex;
    activeColor.style.backgroundColor = selectedColorHex;
    hexInput.value = selectedColorHex;

    updateColorSlider();
    updateColorFromInputs(red, green, blue);

    openedColorPickerFromTeardrop =
        openTool === colorPickerToolSelection;

    getTool(openTool);
}

canvas.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    if (!teardropToolSelection.classList.contains("selected")) return;
    beginHistoryAction();
    echoColor(e);
});

// #endregion

// #region code for selecting an area on the canvas (area selector tool functions)

let selectionCanvasBackup = null;

function drawSelection() {

    if (!selection.active && !isSelecting) return;

    activeLayer.ctx.save();

    activeLayer.ctx.globalCompositeOperation = "source-over";
    activeLayer.ctx.strokeStyle = "black";
    activeLayer.ctx.lineWidth = 2;
    activeLayer.ctx.setLineDash([6, 6]);

    activeLayer.ctx.strokeRect(
        selection.x,
        selection.y,
        selection.width,
        selection.height
    );

    activeLayer.ctx.restore();
}

function renderSelection() {

    if (!selection.active || !selection.image) return;

    const selectionCanvas = document.createElement("canvas");

    selectionCanvas.width = selection.image.width;
    selectionCanvas.height = selection.image.height;

    const selectionCtx =
        selectionCanvas.getContext("2d");

    selectionCtx.putImageData(
        selection.image,
        0,
        0
    );

    activeLayer.ctx.save();

    activeLayer.ctx.globalCompositeOperation =
        "source-over";

    activeLayer.ctx.drawImage(
        selectionCanvas,
        Math.floor(selection.x),
        Math.floor(selection.y)
    );

    activeLayer.ctx.restore();

    drawSelection();
}

function restoreSelectionCanvas() {

    if (!selectionCanvasBackup) return;

    activeLayer.ctx.putImageData(
        selectionCanvasBackup,
        0,
        0
    );
}

function stopSelection() {

    isSelecting = false;
    isMovingSelection = false;

    canvas.style.cursor = "default";
    
    commitSelection();

    selection.active = false;
    selection.image = null;

    selection.x = 0;
    selection.y = 0;
    selection.width = 0;
    selection.height = 0;

    selectionCanvasBackup = null;

    drawCanvas();
}

canvas.addEventListener("mousedown", (event) => {

    if (event.button !== 0) return;
    if (!areaSelectorToolSelection.classList.contains("selected")) return;
    if (!activeLayer) return;
    if (activeLayer.hidden === true) return;
    beginHistoryAction();

    const mouse = getMousePos(event);
    if (
        selection.active &&
        mouse.x >= selection.x &&
        mouse.x <= selection.x + selection.width &&
        mouse.y >= selection.y &&
        mouse.y <= selection.y + selection.height
    ) {

        isMovingSelection = true;

        selectionMoveOffsetX = mouse.x - selection.x;
        selectionMoveOffsetY = mouse.y - selection.y;

        canvas.style.cursor = "move";

        return;
    }

    if (selection.active) {
        commitSelection();
    }

    isSelecting = true;

    selectionStartX = Math.floor(mouse.x);
    selectionStartY = Math.floor(mouse.y);

    selection.active = false;
    selection.image = null;

    selectionOriginalImage = null;
    selectionOriginalWidth = 0;
    selectionOriginalHeight = 0;
    AreaRotation = 0;

    selection.x = Math.floor(mouse.x);
    selection.y = Math.floor(mouse.y);
    selection.width = 0;
    selection.height = 0;

    selectionCanvasBackup = activeLayer.ctx.getImageData(
        0,
        0,
        activeLayer.canvas.width,
        activeLayer.canvas.height
    );
});

canvas.addEventListener("mousemove", (event) => {

    const mouse = getMousePos(event);

    if (isMovingSelection) {

        selection.x = Math.floor(mouse.x) - selectionMoveOffsetX;
        selection.y = Math.floor(mouse.y) - selectionMoveOffsetY;

        restoreSelectionCanvas();

        renderSelection();

        return;
    }

    if (!isSelecting) return;

    selection.x = Math.min(
        selectionStartX,
        mouse.x
    );

    selection.y = Math.min(
        selectionStartY,
        mouse.y
    );

    selection.width = Math.abs(
        mouse.x - selectionStartX
    );

    selection.height = Math.abs(
        mouse.y - selectionStartY
    );

    // Restore the original canvas while dragging
    // the selection rectangle.
    restoreSelectionCanvas();

    activeLayer.ctx.save();

    activeLayer.ctx.strokeStyle = "black";
    activeLayer.ctx.lineWidth = 2;
    activeLayer.ctx.setLineDash([6, 6]);

    activeLayer.ctx.strokeRect(
        Math.floor(selection.x),
        Math.floor(selection.y),
        Math.floor(selection.width),
        Math.floor(selection.height)
    );

    activeLayer.ctx.restore();
});

canvas.addEventListener("mouseup", (event) => {

    if (isMovingSelection) {

        isMovingSelection = false;
        canvas.style.cursor = "default";

        restoreSelectionCanvas();

        renderSelection();

        return;
    }

    if (!isSelecting) return;

    isSelecting = false;

    if (
        selection.width < 1 ||
        selection.height < 1
    ) {
        selection.active = false;
        selection.image = null;

        restoreSelectionCanvas();

        selectionCanvasBackup = null;

        return;
    }

    const x = Math.floor(selection.x);
    const y = Math.floor(selection.y);
    const width = Math.floor(selection.width);
    const height = Math.floor(selection.height);
    
    selection.x = x;
    selection.y = y;
    selection.width = width;
    selection.height = height;

selection.image = new ImageData(
        width,
        height
    );

    for (let sy = 0; sy < height; sy++) {

        for (let sx = 0; sx < width; sx++) {

            const sourceIndex =
                ((y + sy) * canvas.width + (x + sx)) * 4;

            const targetIndex =
                (sy * width + sx) * 4;

            selection.image.data[targetIndex] =
                selectionCanvasBackup.data[sourceIndex];

            selection.image.data[targetIndex + 1] =
                selectionCanvasBackup.data[sourceIndex + 1];

            selection.image.data[targetIndex + 2] =
                selectionCanvasBackup.data[sourceIndex + 2];

            selection.image.data[targetIndex + 3] =
                selectionCanvasBackup.data[sourceIndex + 3];
        }
    }

    for (let sy = 0; sy < height; sy++) {

        for (let sx = 0; sx < width; sx++) {

            const index =
                ((y + sy) * activeLayer.canvas.width + (x + sx)) * 4;

            selectionCanvasBackup.data[index] = 0;
            selectionCanvasBackup.data[index + 1] = 0;
            selectionCanvasBackup.data[index + 2] = 0;
            selectionCanvasBackup.data[index + 3] = 0;
        }
    }

    restoreSelectionCanvas();

    selection.active = true;

    renderSelection();
});

function commitSelection() {

    if (!selection.active || !selection.image) return;

    restoreSelectionCanvas();

    const x = Math.floor(selection.x);
    const y = Math.floor(selection.y);

    const image = selection.image;

    const layerImage = activeLayer.ctx.getImageData(
        0,
        0,
        activeLayer.canvas.width,
        activeLayer.canvas.height
    );

    for (let sy = 0; sy < image.height; sy++) {

        for (let sx = 0; sx < image.width; sx++) {

            const targetX = x + sx;
            const targetY = y + sy;

            if (
                targetX < 0 ||
                targetX >= activeLayer.canvas.width ||
                targetY < 0 ||
                targetY >= activeLayer.canvas.height
            ) {
                continue;
            }

            const sourceIndex =
                (sy * image.width + sx) * 4;

            const alpha =
                image.data[sourceIndex + 3];

            // Transparent pixels are ignored.
            if (alpha === 0) {
                continue;
            }

            const targetIndex =
                (targetY * activeLayer.canvas.width + targetX) * 4;

            layerImage.data[targetIndex] =
                image.data[sourceIndex];

            layerImage.data[targetIndex + 1] =
                image.data[sourceIndex + 1];

            layerImage.data[targetIndex + 2] =
                image.data[sourceIndex + 2];

            layerImage.data[targetIndex + 3] =
                image.data[sourceIndex + 3];
        }
    }

    activeLayer.ctx.putImageData(
        layerImage,
        0,
        0
    );

    selection.active = false;
    selection.image = null;

    selectionCanvasBackup = null;

    selectionOriginalImage = null;
    selectionOriginalWidth = 0;
    selectionOriginalHeight = 0;
    AreaRotation = 0;
}

function deleteSelection() {

    if (!selection.active) return;
    
    activeLayer.ctx.clearRect(
        Math.floor(selection.x),
        Math.floor(selection.y),
        Math.floor(selection.width),
        Math.floor(selection.height)
    );
    
    restoreSelectionCanvas();

    selection.active = false;
    selection.image = null;

    selectionCanvasBackup = null;

    selectionOriginalImage = null;
    selectionOriginalWidth = 0;
    selectionOriginalHeight = 0;
    AreaRotation = 0;

    drawCanvas();
}

function copySelection() {

    selectionClipboard = new ImageData(
        new Uint8ClampedArray(selection.image.data),
        selection.image.width,
        selection.image.height
    );
}

function pasteSelection() {

    if (!selectionClipboard) return;


    // Commit current selection first.
    if (selection.active) {
        commitSelection();
    }


    // Copy clipboard pixels.
    selection.image = new ImageData(
        new Uint8ClampedArray(selectionClipboard.data),
        selectionClipboard.width,
        selectionClipboard.height
    );

    // Keep inside canvas.
    selection.x = Math.max(
        0,
        Math.min(
            activeLayer.canvas.width - selection.image.width,
            selection.x
        )
    );

    selection.y = Math.max(
        0,
        Math.min(
            activeLayer.canvas.height - selection.image.height,
            selection.y
        )
    );


    selection.width = selection.image.width;
    selection.height = selection.image.height;

    selection.active = true;

    selectionCanvasBackup = activeLayer.ctx.getImageData(
        0,
        0,
        activeLayer.canvas.width,
        activeLayer.canvas.height
    );

    renderSelection();
}

document.addEventListener("keydown", (event) => {
    if (!areaSelectorToolSelection.classList.contains("selected")) {
        return;
    }
    if (!activeLayer) return;
    if (activeLayer.hidden === true) return;


    // DELETE / BACKSPACE
    if (
        event.key === "Delete" ||
        event.key === "Backspace"
    ) {

        if (selection.active) {
            event.preventDefault();
            deleteSelection();
        }

        return;
    }


    // CTRL/CMD + C
    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "c"
    ) {

        if (selection.active) {
            event.preventDefault();
            copySelection();
        }

        return;
    }


    // CTRL/CMD + V
    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "v"
    ) {

        if (selectionClipboard) {
            event.preventDefault();
            pasteSelection();
        }

        return;
    }


    // ESCAPE
    if (event.key === "Escape") {

        if (selection.active) {
            commitSelection();
        }

        return;
    }
});

function drawCanvas() {

    // Do not redraw the floating selection here.
    // The selection is already physically represented
    // by its ImageData.

    if (selection.active) {
        renderSelection();
    }
}

// #endregion

// #region code for making shapes on the canvas (forms tool functions)

let shapePreviewImage = null;

function startShape(e) {
    beginHistoryAction();
    const pos = getMousePos(e);

    shapeStartX = pos.x;
    shapeStartY = pos.y;

    // Save the canvas before we start previewing
    shapePreviewImage = activeLayer.ctx.getImageData(
        0,
        0,
        activeLayer.canvas.width,
        activeLayer.canvas.height
    );

    makingShape = true;
}

function drawShapePreview(e) {
    if (!makingShape) return;
    if (!activeLayer) return;
    if (activeLayer.hidden === true) return;

    const pos = getMousePos(e);

    const angle = ShapeRotation * Math.PI / 180;
    
    const dx = pos.x - shapeStartX;
    const dy = pos.y - shapeStartY;

    const width =
        dx * Math.cos(angle) +
        dy * Math.sin(angle);

    const height =
        -dx * Math.sin(angle) +
        dy * Math.cos(angle);

    // Restore canvas to before the shape
    activeLayer.ctx.putImageData(shapePreviewImage, 0, 0);

    activeLayer.ctx.globalCompositeOperation = "source-over";

    activeLayer.ctx.lineWidth = lineWidthSelection.value;
    activeLayer.ctx.strokeStyle = Color;
    activeLayer.ctx.fillStyle = Color;
    ShapeRotation = rotateForm.value;
    if (infillOption.value === "true") {
        ShapeFill = true;
    }
    else {
        ShapeFill = false;
    }

    activeLayer.ctx.save();

    activeLayer.ctx.translate(shapeStartX, shapeStartY);

    activeLayer.ctx.rotate(ShapeRotation * Math.PI / 180);

    activeLayer.ctx.translate(-shapeStartX, -shapeStartY);

    if (Shape === "square") {
        drawRectangle(
            shapeStartX,
            shapeStartY,
            width,
            height
        );
    }

    if (Shape === "circle") {
        drawCircle(
            shapeStartX,
            shapeStartY,
            width,
            height
        );
    }

    if (Shape === "triangle") {
        drawTriangle(
            shapeStartX,
            shapeStartY,
            width,
            height
        );
    }

    if (Shape === "line") {
        drawLine(
            shapeStartX,
            shapeStartY,
            pos.x,
            pos.y
        );
    }

    activeLayer.ctx.restore();
}

function finishShape(e) {
    if (!makingShape) return;
    if (!activeLayer) return;
    if (activeLayer.hidden === true) return;

    drawShapePreview(e);

    makingShape = false;
    shapePreviewImage = null;

    activeLayer.ctx.beginPath();
}

function drawRectangle(x, y, width, height) {

    if (ShapeFill) {
        activeLayer.ctx.fillRect(x, y, width, height);
    }

    if (ShapeOutline) {
        activeLayer.ctx.strokeRect(x, y, width, height);
    }
}

function drawCircle(x, y, width, height) {

    const centerX = x + width / 2;
    const centerY = y + height / 2;

    const radiusX = Math.abs(width / 2);
    const radiusY = Math.abs(height / 2);

    activeLayer.ctx.beginPath();

    activeLayer.ctx.ellipse(
        centerX,
        centerY,
        radiusX,
        radiusY,
        0,
        0,
        Math.PI * 2
    );

    if (ShapeFill) {
        activeLayer.ctx.fill();
    }

    if (ShapeOutline) {
        activeLayer.ctx.stroke();
    }
}

function drawTriangle(x, y, width, height) {

    activeLayer.ctx.beginPath();

    // Top point
    activeLayer.ctx.moveTo(
        x,
        y
    );

    // Bottom-left
    activeLayer.ctx.lineTo(
        x,
        y + height
    );

    // Bottom-right
    activeLayer.ctx.lineTo(
        x + width,
        y + height
    );

    // Close triangle
    activeLayer.ctx.closePath();

    if (ShapeFill) {
        activeLayer.ctx.fill();
    }

    if (ShapeOutline) {
        activeLayer.ctx.stroke();
    }
}

function drawLine(x1, y1, x2, y2) {

    activeLayer.ctx.beginPath();

    activeLayer.ctx.moveTo(x1, y1);
    activeLayer.ctx.lineTo(x2, y2);

    activeLayer.ctx.stroke();
}

canvas.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    if (!formsToolSelection.classList.contains("selected")) return;
    if (!activeLayer) return;
    if (activeLayer.hidden === true) return;

    startShape(e);
});

canvas.addEventListener("mousemove", (e) => {
    if (!makingShape) return;
    if (!activeLayer) return;
    if (activeLayer.hidden === true) return;

    drawShapePreview(e);
});

canvas.addEventListener("mouseup", (e) => {
    if (!makingShape) return;
    if (!activeLayer) return;
    if (activeLayer.hidden === true) return;

    finishShape(e);
});

// #endregion

// #region code for creating and managing layers on the canvas (layers tool functions)

function updateLayerSettings() {
    layerID.textContent =
        layers.length - layers.indexOf(activeLayer);

    // Load this layer's opacity
    layerOpacitySlider.value = activeLayer.opacity;
    layerOpacityValue.textContent =
        activeLayer.opacity + "%";

    activeLayer.canvas.style.opacity =
        activeLayer.opacity / 100;
}

function updateLayerUI() {
    const boxes = {};

    document.querySelectorAll(".layer_box").forEach(box => {
        boxes[box.id] = box;
    });

    layerList.innerHTML = "";

    layers.forEach(layer => {

        const box = boxes[`layer_${layer.id}`];
        if (box) {
            layerList.appendChild(box);
        }
    });
}

function updateDeleteLayerButtons() {

    const deleteButtons =
        document.querySelectorAll(".hide_delete_layer, .delete_layer");

    deleteButtons.forEach(button => {

        if (layers.length >= 2) {

            button.classList.remove("hide_delete_layer");
            button.classList.add("delete_layer");

        }
        else {

            button.classList.remove("delete_layer");
            button.classList.add("hide_delete_layer");

        }

    });
}

function deleteLayer(layer) {
    if (layers.length <= 1) {
        return;
    }

    const deletedIndex = layers.indexOf(layer);

    if (deletedIndex === -1) {
        return;
    }

    layer.canvas.remove();

    layers.splice(deletedIndex, 1);

    const layerBox = document.getElementById(`layer_${layer.id}`);

    if (layerBox) {
        layerBox.remove();
    }

    updateLayerOrder();

    updateLayerUI();

    if (layers.length > 0) {

        const newIndex =
            Math.min(deletedIndex, layers.length - 1);

        selectLayer(layers[newIndex]);
    }

    updateDeleteLayerButtons();

    updateLayerSettings();
}

function updateLayerOrder() {
    layers.forEach(layer => {
        layer.canvas.style.zIndex =
            layers.length - layers.indexOf(layer);
    });
}

function moveLayerUp(layer) {
    const index = layers.indexOf(layer);

    if (index <= 0) return;

    [layers[index], layers[index - 1]] =
    [layers[index - 1], layers[index]];

    updateLayerOrder();
    updateLayerUI();

    updateLayerSettings();
}

function moveLayerDown(layer) {
    const index = layers.indexOf(layer);

    if (index >= layers.length - 1) return;

    [layers[index], layers[index + 1]] =
    [layers[index + 1], layers[index]];

    updateLayerOrder();
    updateLayerUI();

    updateLayerSettings();
}

function updateLayerPreview(layer) {

    const previewCtx = layer.preview.getContext("2d");

    previewCtx.clearRect(
        0,
        0,
        layer.preview.width,
        layer.preview.height
    );

    previewCtx.drawImage(
        layer.canvas,
        0,
        0,
        layer.preview.width,
        layer.preview.height
    );
}

function selectLayer(layer) {
    activeLayer = layer;

    // Remove selection from all layer boxes
    document.querySelectorAll(".layer_box").forEach(box => {
        box.classList.remove("selected");
    });

    // Select this layer's box
    const layerBox = document.getElementById(`layer_${layer.id}`);

    if (layerBox) {
        layerBox.classList.add("selected");
    }

    updateLayerSettings();
}

function createLayerUI(layer) {

    const layerBox = document.createElement("div");

    layerBox.classList.add("layer_box");
    layerBox.id = `layer_${layer.id}`;
    layerBox.classList.add(
        layer.hidden ? "hidden" : "showing"
    );

    const showHideImage = document.createElement("img");

    showHideImage.src = layer.hidden
        ? "Pictures/Hiding_BackgroundLogo.png"
        : "Pictures/Showing_BackgroundLogo.png";

    showHideImage.alt = "show/hide layer";
    showHideImage.classList.add("show_hide_layer");
    showHideImage.classList.add(
        layer.hidden ? "hidden" : "showing"
    );

    const push_canvas_up = document.createElement("img");

    push_canvas_up.src =
        "Pictures/Push_Canvas_UpLogo.png";

    push_canvas_up.classList.add("push_canvas_up");

    const push_canvas_down = document.createElement("img");

    push_canvas_down.src =
        "Pictures/Push_Canvas_DownLogo.png";

    push_canvas_down.classList.add("push_canvas_down");

    const delete_layer = document.createElement("img");

    delete_layer.src =
        "Pictures/Delete_LayerLogo.png";

    delete_layer.classList.add(
        layers.length >= 2
            ? "delete_layer"
            : "hide_delete_layer"
    );

    layerBox.appendChild(layer.preview);
    layerBox.appendChild(showHideImage);
    layerBox.appendChild(push_canvas_up);
    layerBox.appendChild(push_canvas_down);
    layerBox.appendChild(delete_layer);

    layerList.prepend(layerBox);

    selectLayer(layer);

    layerBox.addEventListener("mousedown", event => {
        if (event.button !== 0) return;

        if (event.target === showHideImage) {
            return;
        }

        beginHistoryAction();

        selectLayer(layer);
    });

    push_canvas_up.addEventListener("mousedown", e => {
        if (e.button !== 0) return;

        e.stopPropagation();

        beginHistoryAction();

        moveLayerUp(layer);
    });

    push_canvas_down.addEventListener("click", e => {
        if (e.button !== 0) return;

        e.stopPropagation();

        moveLayerDown(layer);
    });

    showHideImage.addEventListener("mousedown", e => {
        if (e.button !== 0) return;

        e.stopPropagation();

        beginHistoryAction();

        layer.hidden = !layer.hidden;

        layer.canvas.style.visibility =
            layer.hidden ? "hidden" : "visible";

        layerBox.classList.toggle(
            "hidden",
            layer.hidden
        );

        layerBox.classList.toggle(
            "showing",
            !layer.hidden
        );

        showHideImage.src = layer.hidden
            ? "Pictures/Hiding_BackgroundLogo.png"
            : "Pictures/Showing_BackgroundLogo.png";
    });

    delete_layer.addEventListener("click", e => {
        if (e.button !== 0) return;

        e.stopPropagation();

        beginHistoryAction();

        if (
            delete_layer.classList.contains(
                "hide_delete_layer"
            )
        ) {
            return;
        }

        deleteLayer(layer);
    });
}

function createLayer(name = null) {

    const layerCanvas = document.createElement("canvas");

    layerCanvas.width = canvas.width;
    layerCanvas.height = canvas.height;

    layerCanvas.classList.add("layer");

    layerCanvas.style.transform =
        `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;
        
    layerCanvas.style.pointerEvents = "none";

    
    const layerPreview = document.createElement("canvas");
    layerPreview.classList.add("layer_canvas");

    const layer = {
        id: nextLayerId,
        name: name || `Layer ${nextLayerId}`,
        canvas: layerCanvas,
        ctx: layerCanvas.getContext("2d"),
        preview: layerPreview,
        hidden: false,
        opacity: 100
    };

    nextLayerId++;

    layers.unshift(layer);

    layersContainer.appendChild(layerCanvas);

    updateLayerOrder();

    createLayerUI(layer);
    
    updateLayerSettings();

    return layer;
}

addLayerButton.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    beginHistoryAction();
    createLayer();
    updateDeleteLayerButtons();
});

createLayer()

showingBackgroundcolor.addEventListener("click", (e) => {
    if (e.button !== 0) return;
    if (!backgroundColorCanvas.style.backgroundImage) {
        showingBackgroundcolor.src = "Pictures/Hiding_BackgroundLogo.png";
        backgroundColorCanvas.style.backgroundImage = "url('Pictures/Previw_Canvas_Background.png')";
        canvas.style.backgroundImage = "url('Pictures/Previw_Canvas_Background.png')";
    } else {
        showingBackgroundcolor.src = "Pictures/Showing_BackgroundLogo.png";
        backgroundColorCanvas.style.backgroundImage = null;
        canvas.style.backgroundImage = null;
    }
});

backgroundColorCanvas.addEventListener("click", (e) => {
    if (e.button !== 0) return;
    e.stopPropagation();
    if (colorPickerToolSelection.classList.contains("selected")) return;
    if (colorMenu.classList.contains("closed")) {
        colorPickerTarget = "background";
        loadColorIntoPicker(actualBackgroundColor);
        colorMenu.classList.remove("closed");
    }
    else {
        colorMenu.classList.add("closed");
    }
});

// #endregion

// #region code for painting on the canvas (pencil tool functions)

function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();

    // Convert screen coordinates to canvas coordinates
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    };
}

canvas.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    if (!pencilToolSelection.classList.contains("selected")) return;
    if (!activeLayer) return;
    if (activeLayer.hidden === true) return;
    beginHistoryAction();
    drawing = true;

    const pos = getMousePos(e);

    activeLayer.ctx.beginPath();
    activeLayer.ctx.moveTo(pos.x, pos.y);
});

canvas.addEventListener("mouseup", () => {
    drawing = false;
    if (!activeLayer) return;
    activeLayer.ctx.beginPath();
    updateLayerPreview(activeLayer);
});

canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;

    if (!activeLayer) return;

    const pos = getMousePos(e);
    const activeCtx = activeLayer.ctx;

    activeCtx.lineWidth = PenSize;
    activeCtx.lineCap = PenShape;
    activeCtx.globalCompositeOperation = "source-over";
    activeCtx.strokeStyle = Color;

    activeCtx.lineTo(pos.x, pos.y);
    activeCtx.stroke();

    activeCtx.beginPath();
    activeCtx.moveTo(pos.x, pos.y);
});

// #endregion

// #region code for zooming and panning the canvas

layersPopup.addEventListener("wheel", (e) => {
    e.stopPropagation();
});

function updateExtraLayerTransforms() {
    if (layers.length < 1) return; 

    for (let i = 0; i < layers.length; i++) {

        const layer = layers[i];

        layer.canvas.style.transform =
            `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;

    }

}

viewport.addEventListener("wheel", (e) => {
    if (!e.ctrlKey) return;

    e.preventDefault();

    // Mouse position inside viewport
    const rect = viewport.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Position on canvas before zoom
    const canvasX = (mouseX - offsetX) / zoom;
    const canvasY = (mouseY - offsetY) / zoom;

    // Change zoom
    const oldZoom = zoom;

    if (e.deltaY < 0) {
        zoom *= 1.1;
    } else {
        zoom /= 1.1;
    }

    // Limit zoom
    zoom = Math.max(0.1, Math.min(10, zoom));

    // Adjust offset so the mouse stays over the same canvas point
    offsetX = mouseX - canvasX * zoom;
    offsetY = mouseY - canvasY * zoom;

    // Apply
    canvas.style.transform =
        `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;

    updateExtraLayerTransforms();

}, { passive: false });

viewport.addEventListener("wheel", (e) => {
    if (e.ctrlKey) return;

    e.preventDefault();

    offsetY -= e.deltaY;

    canvas.style.transform =
        `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;
    
    updateExtraLayerTransforms();

}, { passive: false });

// #endregion

// #region saving and exporting the canvas

saveCanvasButton.addEventListener("click", (e) => {
    if (e.button !== 0) return;
    exportCanvasAsPNG();
});

function exportCanvasAsPNG() {

    if (isSelecting || selection.active) {
        console.error("cannot save while selecting");
        return;
    }

    // --------------------------------------------------
    // Ask for filename
    // --------------------------------------------------

    let fileName = prompt(
        "Enter a name for your PNG:",
        "drawing"
    );

    // User pressed Cancel
    if (fileName === null) {
        return;
    }

    // Remove leading/trailing spaces
    fileName = fileName.trim();

    // Don't allow an empty filename
    if (fileName === "") {
        fileName = "drawing";
    }

    // Remove .png if the user typed it,
    // so we don't end up with drawing.png.png
    fileName = fileName.replace(/\.png$/i, "");


    // Create a temporary canvas.
    const exportCanvas = document.createElement("canvas");

    exportCanvas.width = canvas.width;
    exportCanvas.height = canvas.height;

    const exportCtx = exportCanvas.getContext("2d");

    // --------------------------------------------------
    // Background
    // --------------------------------------------------

    // If the background is currently showing the
    // transparency/checkerboard image, leave the export
    // transparent.
    //
    // Otherwise use the selected background color.

    const showingTransparentBackground =
        backgroundColorCanvas.style.backgroundImage !== "";

    if (!showingTransparentBackground) {
        exportCtx.fillStyle = backgroundColor;
        exportCtx.fillRect(
            0,
            0,
            exportCanvas.width,
            exportCanvas.height
        );
    }

    // --------------------------------------------------
    // Layers
    // --------------------------------------------------

    // Your `layers` array is ordered from top -> bottom.
    // We need to draw bottom -> top.
    for (let i = layers.length - 1; i >= 0; i--) {

        const layer = layers[i];

        // Don't export hidden layers.
        if (layer.hidden) {
            continue;
        }

        exportCtx.save();

        // Preserve layer opacity.
        exportCtx.globalAlpha =
            layer.opacity / 100;

        exportCtx.drawImage(
            layer.canvas,
            0,
            0
        );

        exportCtx.restore();
    }

    // --------------------------------------------------
    // Download
    // --------------------------------------------------

    exportCanvas.toBlob((blob) => {

        if (!blob) {
            console.error("Could not create PNG.");
            return;
        }

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        link.remove();

        URL.revokeObjectURL(url);

    }, "image/png");
}

// #endregion

// #region importing to the canvas

importToCanvasButton.addEventListener("click", (e) => {
    if (e.button !== 0) return;

    const input = document.createElement("input");

    input.type = "file";
    input.accept = "image/*";

    input.addEventListener("change", () => {

        const file = input.files[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {

            const image = new Image();

            image.onload = () => {
                importImageToCanvas(image);
            };

            image.onerror = () => {
                console.error("Could not load imported image.");
            };

            image.src = reader.result;
        };

        reader.readAsDataURL(file);
    });

    input.click();
});


function importImageToCanvas(image) {

    if (!activeLayer) {
        return;
    }

    if (activeLayer.hidden) {
        return;
    }

    // --------------------------------------------------
    // Finish any existing selection first
    // --------------------------------------------------

    if (selection.active) {
        commitSelection();
    }

    // --------------------------------------------------
    // Original image dimensions
    // --------------------------------------------------

    const imageWidth = image.naturalWidth;
    const imageHeight = image.naturalHeight;

    if (
        imageWidth <= 0 ||
        imageHeight <= 0
    ) {
        return;
    }

    // --------------------------------------------------
    // Begin history
    // --------------------------------------------------

    beginHistoryAction();

    // --------------------------------------------------
    // Expand canvas ONLY if image is larger
    // --------------------------------------------------

    const oldWidth = canvas.width;
    const oldHeight = canvas.height;

    const newWidth = Math.max(
        oldWidth,
        imageWidth
    );

    const newHeight = Math.max(
        oldHeight,
        imageHeight
    );

    if (
        newWidth !== oldWidth ||
        newHeight !== oldHeight
    ) {

        layers.forEach(layer => {

            const oldLayerWidth = layer.canvas.width;
            const oldLayerHeight = layer.canvas.height;

            // Save existing layer
            const oldImage = layer.ctx.getImageData(
                0,
                0,
                layer.canvas.width,
                layer.canvas.height
            );

            layer.canvas.width = newWidth;
            layer.canvas.height = newHeight;

            layer.ctx = layer.canvas.getContext("2d");

            layer.ctx.putImageData(oldImage, 0, 0);

            layer.canvas.style.transform =
                `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;

            updateLayerPreview(layer);
        });

        // Resize main canvas
        canvas.width = newWidth;
        canvas.height = newHeight;

        canvas.style.transform =
            `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;

        updateExtraLayerTransforms();
    }

    // --------------------------------------------------
    // Convert image to ImageData WITHOUT scaling it
    // --------------------------------------------------

    const imageCanvas =
        document.createElement("canvas");

    imageCanvas.width = imageWidth;
    imageCanvas.height = imageHeight;

    const imageCtx =
        imageCanvas.getContext("2d");

    imageCtx.drawImage(
        image,
        0,
        0,
        imageWidth,
        imageHeight
    );

    const imageData =
        imageCtx.getImageData(
            0,
            0,
            imageWidth,
            imageHeight
        );

    // --------------------------------------------------
    // Create floating selection
    // --------------------------------------------------

    selection.image = new ImageData(
        new Uint8ClampedArray(imageData.data),
        imageWidth,
        imageHeight
    );

    selection.width = imageWidth;
    selection.height = imageHeight;

    // Put imported image in the center of the canvas
    selection.x =
        Math.floor((canvas.width - imageWidth) / 2);

    selection.y =
        Math.floor((canvas.height - imageHeight) / 2);

    // --------------------------------------------------
    // Save active layer before inserting selection
    // --------------------------------------------------

    selectionCanvasBackup =
        activeLayer.ctx.getImageData(
            0,
            0,
            activeLayer.canvas.width,
            activeLayer.canvas.height
        );

    // --------------------------------------------------
    // Make it an active floating selection
    // --------------------------------------------------

    selection.active = true;

    isSelecting = false;
    isMovingSelection = false;

    selectionOriginalImage = null;
    selectionOriginalWidth = 0;
    selectionOriginalHeight = 0;

    AreaRotation = 0;

    // --------------------------------------------------
    // Select the area selector WITHOUT using getTool()
    //
    // getTool() calls stopSelection(), which would
    // immediately destroy our new selection.
    // --------------------------------------------------

    toolSelections.forEach(otherTool => {
        otherTool.classList.remove("selected");
    });

    areaSelectorToolSelection.classList.add("selected");

    colorMenu.classList.add("closed");

    // --------------------------------------------------
    // Display the imported image
    // --------------------------------------------------

    restoreSelectionCanvas();
    renderSelection();

    // --------------------------------------------------
    // Update UI
    // --------------------------------------------------

    updateLayerPreview(activeLayer);

    // --------------------------------------------------
    // Finish history
    // --------------------------------------------------

    endHistoryAction();
}

// #endregion