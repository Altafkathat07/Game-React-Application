// import { useEffect, useRef } from 'react';

// const QrGenerater = ({ options = {} }) => {
//   function QR8bitByte(data) {
//     this.mode = QRMode.MODE_8BIT_BYTE;
//     this.data = data;
//     this.parsedData = [];

//     // Convert data to UTF-8 byte array
//     for (let i = 0, l = this.data.length; i < l; i++) {
//         let byteArray = [];
//         let code = this.data.charCodeAt(i);

//         if (code > 0x10000) {
//             byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
//             byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
//             byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
//             byteArray[3] = 0x80 | (code & 0x3F);
//         } else if (code > 0x800) {
//             byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
//             byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
//             byteArray[2] = 0x80 | (code & 0x3F);
//         } else if (code > 0x80) {
//             byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
//             byteArray[1] = 0x80 | (code & 0x3F);
//         } else {
//             byteArray[0] = code;
//         }

//         this.parsedData.push(byteArray);
//     }

//     this.parsedData = Array.prototype.concat.apply([], this.parsedData);

//     // Add BOM for UTF-8
//     if (this.parsedData.length != this.data.length) {
//         this.parsedData.unshift(191);
//         this.parsedData.unshift(187);
//         this.parsedData.unshift(239);
//     }
// }

// QR8bitByte.prototype = {
//     getLength: function (buffer) {
//         return this.parsedData.length;
//     },
//     write: function (buffer) {
//         for (let i = 0, l = this.parsedData.length; i < l; i++) {
//             buffer.put(this.parsedData[i], 8);
//         }
//     }
// };

// function QRCodeModel(typeNumber, errorCorrectLevel) {
//   this.typeNumber = typeNumber;
//   this.errorCorrectLevel = errorCorrectLevel;
//   this.modules = null;
//   this.moduleCount = 0;
//   this.dataCache = null;
//   this.dataList = [];
// }

// QRCodeModel.prototype = {
//   addData: function (data) {
//       let newData = new QR8bitByte(data);
//       this.dataList.push(newData);
//       this.dataCache = null;
//   },
//   isDark: function (row, col) {
//       if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
//           throw new Error(row + "," + col);
//       }
//       return this.modules[row][col];
//   },
//   getModuleCount: function () {
//       return this.moduleCount;
//   },
//   make: function () {
//       this.makeImpl(false, this.getBestMaskPattern());
//   },
//   makeImpl: function (test, maskPattern) {
//       this.moduleCount = this.typeNumber * 4 + 17;
//       this.modules = new Array(this.moduleCount);
//       for (let row = 0; row < this.moduleCount; row++) {
//           this.modules[row] = new Array(this.moduleCount);
//           for (let col = 0; col < this.moduleCount; col++) {
//               this.modules[row][col] = null;
//           }
//       }
//       this.setupPositionProbePattern(0, 0);
//       this.setupPositionProbePattern(this.moduleCount - 7, 0);
//       this.setupPositionProbePattern(0, this.moduleCount - 7);
//       this.setupPositionAdjustPattern();
//       this.setupTimingPattern();
//       this.setupTypeInfo(test, maskPattern);
//       if (this.typeNumber >= 7) {
//           this.setupTypeNumber(test);
//       }
//       if (this.dataCache == null) {
//           this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
//       }
//       this.mapData(this.dataCache, maskPattern);
//   },
//   setupPositionProbePattern: function (row, col) {
//       for (let r = -1; r <= 7; r++) {
//           if (row + r <= -1 || this.moduleCount <= row + r) continue;
//           for (let c = -1; c <= 7; c++) {
//               if (col + c <= -1 || this.moduleCount <= col + c) continue;
//               if ((0 <= r && r <= 6 && (c == 0 || c == 6)) || 
//                   (0 <= c && c <= 6 && (r == 0 || r == 6)) || 
//                   (2 <= r && r <= 4 && 2 <= c && c <= 4)) {
//                   this.modules[row + r][col + c] = true;
//               } else {
//                   this.modules[row + r][col + c] = false;
//               }
//           }
//       }
//   },
//   getBestMaskPattern: function () {
//       let minLostPoint = 0;
//       let pattern = 0;
//       for (let i = 0; i < 8; i++) {
//           this.makeImpl(true, i);
//           let lostPoint = QRUtil.getLostPoint(this);
//           if (i == 0 || minLostPoint > lostPoint) {
//               minLostPoint = lostPoint;
//               pattern = i;
//           }
//       }
//       return pattern;
//   },
//   // Other methods for QRCodeModel...
// };

// let QRMode = { MODE_NUMBER: 1 << 0, MODE_ALPHA_NUM: 1 << 1, MODE_8BIT_BYTE: 1 << 2, MODE_KANJI: 1 << 3 };
// let QRErrorCorrectLevel = { L: 1, M: 0, Q: 3, H: 2 };
// let QRMaskPattern = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 };
// let QRUtil = {
//     PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
//     G15: (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
//     G18: (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
//     G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
//     getBCHTypeInfo: function (data) {
//         let d = data << 10;
//         while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
//             d ^= QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15));
//         }
//         return ((data << 10) | d) ^ QRUtil.G15_MASK;
//     },
//     getBCHTypeNumber: function (data) {
//         let d = data << 12;
//         while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
//             d ^= QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18));
//         }
//         return (data << 12) | d;
//     },
//     getBCHDigit: function (data) {
//         let digit = 0;
//         while (data != 0) {
//             digit++;
//             data >>>= 1;
//         }
//         return digit;
//     },
//     getPatternPosition: function (typeNumber) {
//         return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
//     },
//     getMask: function (maskPattern, i, j) {
//         switch (maskPattern) {
//             case QRMaskPattern.PATTERN000: return (i + j) % 2 == 0;
//             case QRMaskPattern.PATTERN001: return i % 2 == 0;
//             case QRMaskPattern.PATTERN010: return j % 3 == 0;
//             case QRMaskPattern.PATTERN011: return (i + j) % 3 == 0;
//             case QRMaskPattern.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
//             case QRMaskPattern.PATTERN101: return (i * j) % 2 + (i * j) % 3 == 0;
//             case QRMaskPattern.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 == 0;
//             case QRMaskPattern.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 == 0;
//             default: throw new Error("bad maskPattern:" + maskPattern);
//         }
//     },
//     getErrorCorrectPolynomial: function (errorCorrectLength) {
//         let a = new QRPolynomial([1], 0);
//         for (let i = 0; i < errorCorrectLength; i++) {
//             a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
//         }
//         return a;
//     },
//     getLengthInBits: function (mode, type) {
//         if (1 <= type && type < 10) {
//             switch (mode) {
//                 case QRMode.MODE_NUMBER: return 10;
//                 case QRMode.MODE_ALPHA_NUM: return 9;
//                 case QRMode.MODE_8BIT_BYTE: return 8;
//                 case QRMode.MODE_KANJI: return 8;
//                 default: throw new Error("mode:" + mode);
//             }
//         } else if (type < 27) {
//             switch (mode) {
//                 case QRMode.MODE_NUMBER: return 12;
//                 case QRMode.MODE_ALPHA_NUM: return 11;
//                 case QRMode.MODE_8BIT_BYTE: return 16;
//                 case QRMode.MODE_KANJI: return 10;
//                 default: throw new Error("mode:" + mode);
//             }
//         } else if (type < 41) {
//             switch (mode) {
//                 case QRMode.MODE_NUMBER: return 14;
//                 case QRMode.MODE_ALPHA_NUM: return 13;
//                 case QRMode.MODE_8BIT_BYTE: return 16;
//                 case QRMode.MODE_KANJI: return 12;
//                 default: throw new Error("mode:" + mode);
//             }
//         } else {
//             throw new Error("type:" + type);
//         }
//     },
//     getLostPoint: function (qrCode) {
//         let moduleCount = qrCode.getModuleCount();
//         let lostPoint = 0;
//         for (let row = 0; row < moduleCount; row++) {
//             for (let col = 0; col < moduleCount; col++) {
//                 let sameCount = 0;
//                 let dark = qrCode.isDark(row, col);
//                 for (let r = -1; r <= 1; r++) {
//                     if (row + r < 0 || moduleCount <= row + r) {
//                         continue;
//                     }
//                     for (let c = -1; c <= 1; c++) {
//                         if (col + c < 0 || moduleCount <= col + c) {
//                             continue;
//                         }
//                         if (r == 0 && c == 0) {
//                             continue;
//                         }
//                         if (dark == qrCode.isDark(row + r, col + c)) {
//                             sameCount++;
//                         }
//                     }
//                 }
//                 if (sameCount > 5) {
//                     lostPoint += 3 + sameCount - 5;
//                 }
//             }
//         }
//         for (let row = 0; row < moduleCount - 1; row++) {
//             for (let col = 0; col < moduleCount - 1; col++) {
//                 let count = 0;
//                 if (qrCode.isDark(row, col)) count++;
//                 if (qrCode.isDark(row + 1, col)) count++;
//                 if (qrCode.isDark(row, col + 1)) count++;
//                 if (qrCode.isDark(row + 1, col + 1)) count++;
//                 if (count == 0 || count == 4) {
//                     lostPoint += 3;
//                 }
//             }
//         }
//         for (let row = 0; row < moduleCount; row++) {
//             for (let col = 0; col < moduleCount - 6; col++) {
//                 if (qrCode.isDark(row, col) &&
//                     !qrCode.isDark(row, col + 1) &&
//                     qrCode.isDark(row, col + 2) &&
//                     qrCode.isDark(row, col + 3) &&
//                     qrCode.isDark(row, col + 4) &&
//                     !qrCode.isDark(row, col + 5) &&
//                     qrCode.isDark(row, col + 6)) {
//                     lostPoint += 40;
//                 }
//             }
//         }
//         for (let cols = 0; cols < moduleCount; cols++) {
//             for (let rows = 0; rows < moduleCount - 6; rows++) {
//                 if (qrCode.isDark(rows, cols) &&
//                     !qrCode.isDark(rows + 1, cols) &&
//                     qrCode.isDark(rows + 2, cols) &&
//                     qrCode.isDark(rows + 3, cols) &&
//                     qrCode.isDark(rows + 4, cols) &&
//                     !qrCode.isDark(rows + 5, cols) &&
//                     qrCode.isDark(rows + 6, cols)) {
//                     lostPoint += 40;
//                 }
//             }
//         }
//         let darkCount = 0;
//         for (let cols = 0; cols < moduleCount; cols++) {
//             for (let rows = 0; rows < moduleCount; rows++) {
//                 if (qrCode.isDark(rows, cols)) {
//                     darkCount++;
//                 }
//             }
//         }
//         let ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
//         lostPoint += ratio * 10;
//         return lostPoint;
//     }
// };
// let qr = new QRCodeModel(4, QRErrorCorrectLevel.H);
// qr.addData('Hello, World!');
// qr.make();

// for (let row = 0; row < qr.getModuleCount(); row++) {
//     for (let col = 0; col < qr.getModuleCount(); col++) {
//         process.stdout.write(qr.isDark(row, col) ? '█' : ' ');
//     }
//     process.stdout.write('\n');
// }

//   const defaultOptions = {
//     width: 145,
//     height: 145,
//     typeNumber: 4,
//     colorDark: "#000000",
//     colorLight: "#ffffff",
//     correctLevel: 'H',
//     useSVG: false
//   };

//   const finalOptions = { ...defaultOptions, ...options };
//   const qrRef = useRef(null);

//   useEffect(() => {
//     if (qrRef.current) {
//       const el = qrRef.current;

//       const QRErrorCorrectLevel = { L: 1, M: 0, Q: 3, H: 2 };

//       function _getTypeNumber(sText, nCorrectLevel) {			
//         const QRCodeLimitLength = [
//           // Add the limit length array here...
//         ];

//         let nType = 1;
//         const length = _getUTF8Length(sText);
        
//         for (let i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
//           let nLimit = 0;
          
//           switch (nCorrectLevel) {
//             case QRErrorCorrectLevel.L :
//               nLimit = QRCodeLimitLength[i][0];
//               break;
//             case QRErrorCorrectLevel.M :
//               nLimit = QRCodeLimitLength[i][1];
//               break;
//             case QRErrorCorrectLevel.Q :
//               nLimit = QRCodeLimitLength[i][2];
//               break;
//             case QRErrorCorrectLevel.H :
//               nLimit = QRCodeLimitLength[i][3];
//               break;
//           }
          
//           if (length <= nLimit) {
//             break;
//           } else {
//             nType++;
//           }
//         }
        
//         if (nType > QRCodeLimitLength.length) {
//           throw new Error("Too long data");
//         }
        
//         return nType;
//       }

//       function _getUTF8Length(sText) {
//         const replacedText = encodeURI(sText).toString().replace(/%[0-9a-fA-F]{2}/g, 'a');
//         return replacedText.length + (replacedText.length !== sText.length ? 3 : 0);
//       }

//       class QR8bitByte {
//         constructor(data) {
//           this.mode = QRMode.MODE_8BIT_BYTE;
//           this.data = data;
//           this.parsedData = [];

//           for (let i = 0, l = this.data.length; i < l; i++) {
//             let byteArray = [];
//             const code = this.data.charCodeAt(i);

//             if (code > 0x10000) {
//               byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
//               byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
//               byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
//               byteArray[3] = 0x80 | (code & 0x3F);
//             } else if (code > 0x800) {
//               byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
//               byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
//               byteArray[2] = 0x80 | (code & 0x3F);
//             } else if (code > 0x80) {
//               byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
//               byteArray[1] = 0x80 | (code & 0x3F);
//             } else {
//               byteArray[0] = code;
//             }

//             this.parsedData.push(byteArray);
//           }

//           this.parsedData = Array.prototype.concat.apply([], this.parsedData);

//           if (this.parsedData.length !== this.data.length) {
//             this.parsedData.unshift(191);
//             this.parsedData.unshift(187);
//             this.parsedData.unshift(239);
//           }
//         }

//         getLength(buffer) {
//           return this.parsedData.length;
//         }

//         write(buffer) {
//           for (let i = 0, l = this.parsedData.length; i < l; i++) {
//             buffer.put(this.parsedData[i], 8);
//           }
//         }
//       }

//       class Drawing {
//         constructor(el, options) {
//           this._el = el;
//           this._htOption = options;
//           this._android = this._getAndroid();
//           this._oQRCode = null;
//           this._bIsPainted = false;

//           this._elCanvas = document.createElement('canvas');
//           this._elCanvas.width = this._htOption.width;
//           this._elCanvas.height = this._htOption.height;
//           this._el.appendChild(this._elCanvas);
//           this._oContext = this._elCanvas.getContext('2d');
//         }

//         draw(oQRCode) {
//           const nCount = oQRCode.getModuleCount();
//           const nWidth = this._htOption.width / nCount;
//           const nHeight = this._htOption.height / nCount;
//           const fgColor = this._htOption.colorDark;
//           const bgColor = this._htOption.colorLight;

//           this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);

//           for (let row = 0; row < nCount; row++) {
//             for (let col = 0; col < nCount; col++) {
//               this._oContext.fillStyle = oQRCode.isDark(row, col) ? fgColor : bgColor;
//               const w = (Math.ceil((col + 1) * nWidth) - Math.floor(col * nWidth));
//               const h = (Math.ceil((row + 1) * nHeight) - Math.floor(row * nHeight));
//               this._oContext.fillRect(Math.round(col * nWidth), Math.round(row * nHeight), w, h);
//             }
//           }
//           this._bIsPainted = true;
//         }

//         makeImage() {
//           if (this._bIsPainted) {
//             this._safeSetDataURI();
//           }
//         }

//         isPainted() {
//           return this._bIsPainted;
//         }

//         clear() {
//           this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
//           this._bIsPainted = false;
//         }

//         round(nNumber) {
//           if (!nNumber) {
//             return nNumber;
//           }
//           return Math.floor(nNumber * 1000) / 1000;
//         }

//         _safeSetDataURI() {
//           const dataURL = this._elCanvas.toDataURL('image/png');
//           this._elImage = document.createElement('img');
//           this._elImage.src = dataURL;
//           this._el.appendChild(this._elImage);
//         }

//         _getAndroid() {
//           const ua = navigator.userAgent.toLowerCase();
//           const match = ua.match(/android\s([0-9\.]*)/);
//           return match ? parseFloat(match[1]) : false;
//         }
//       }

//       class QRCodeModel {
//         constructor(typeNumber, errorCorrectLevel) {
//           this.typeNumber = typeNumber;
//           this.errorCorrectLevel = errorCorrectLevel;
//           this.modules = null;
//           this.moduleCount = 0;
//           this.dataCache = null;
//           this.dataList = [];
//         }

//         addData(data) {
//           const newData = new QR8bitByte(data);
//           this.dataList.push(newData);
//           this.dataCache = null;
//         }

//         isDark(row, col) {
//           if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
//             throw new Error(row + "," + col);
//           }
//           return this.modules[row][col];
//         }

//         getModuleCount() {
//           return this.moduleCount;
//         }

//         make() {
//           this.makeImpl(false, this.getBestMaskPattern());
//         }

//         makeImpl(test, maskPattern) {
//           this.moduleCount = this.typeNumber * 4 + 17;
//           this.modules = new Array(this.moduleCount);
//           for (let row = 0; row < this.moduleCount; row++) {
//             this.modules[row] = new Array(this.moduleCount);
//             for (let col = 0; col < this.moduleCount; col++) {
//               this.modules[row][col] = null;
//             }
//           }
//           this.setupPositionProbePattern(0, 0);
//           this.setupPositionProbePattern(this.moduleCount - 7, 0);
//           this.setupPositionProbePattern(0, this.moduleCount - 7);
//           this.setupPositionAdjustPattern();
//           this.setupTimingPattern();
//           this.setupTypeInfo(test, maskPattern);
//           if (this.typeNumber >= 7) {
//             this.setupTypeNumber(test);
//           }
//           if (this.dataCache == null) {
//             this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
//           }
//           this.mapData(this.dataCache, maskPattern);
//         }

//         setupPositionProbePattern(row, col) {
//           for (let r = -1; r <= 7; r++) {
//             if (row + r <= -1 || this.moduleCount <= row + r) continue;
//             for (let c = -1; c <= 7; c++) {
//               if (col + c <= -1 || this.moduleCount <= col + c) continue;
//               if ((0 <= r && r <= 6 && (c == 0 || c == 6)) ||
//                   (0 <= c && c <= 6 && (r == 0 || r == 6)) ||
//                   (2 <= r && r <= 4 && 2 <= c && c <= 4)) {
//                 this.modules[row + r][col + c] = true;
//               } else {
//                 this.modules[row + r][col + c] = false;
//               }
//             }
//           }
//         }

//         setupPositionAdjustPattern() {
//           const pos = QRCodeModel.getPatternPosition(this.typeNumber);
//           for (let i = 0; i < pos.length; i++) {
//             for (let j = 0; j < pos.length; j++) {
//               const row = pos[i];
//               const col = pos[j];
//               if (this.modules[row][col] != null) continue;
//               for (let r = -2; r <= 2; r++) {
//                 for (let c = -2; c <= 2; c++) {
//                   if (r == -2 || r == 2 || c == -2 || c == 2 || (r == 0 && c == 0)) {
//                     this.modules[row + r][col + c] = true;
//                   } else {
//                     this.modules[row + r][col + c] = false;
//                   }
//                 }
//               }
//             }
//           }
//         }

//         setupTimingPattern() {
//           for (let r = 8; r < this.moduleCount - 8; r++) {
//             if (this.modules[r][6] != null) {
//               continue;
//             }
//             this.modules[r][6] = (r % 2 == 0);
//           }
//           for (let c = 8; c < this.moduleCount - 8; c++) {
//             if (this.modules[6][c] != null) {
//               continue;
//             }
//             this.modules[6][c] = (c % 2 == 0);
//           }
//         }

//         setupTypeInfo(test, maskPattern) {
//           const data = (this.errorCorrectLevel << 3) | maskPattern;
//           const bits = QRCodeModel.getBCHTypeInfo(data);
//           for (let i = 0; i < 15; i++) {
//             const mod = (!test && ((bits >> i) & 1) == 1);
//             if (i < 6) {
//               this.modules[i][8] = mod;
//             } else if (i < 8) {
//               this.modules[i + 1][8] = mod;
//             } else {
//               this.modules[this.moduleCount - 15 + i][8] = mod;
//             }
//             const mod2 = (!test && ((bits >> i) & 1) == 1);
//             if (i < 8) {
//               this.modules[8][this.moduleCount - i - 1] = mod2;
//             } else if (i < 9) {
//               this.modules[8][15 - i - 1 + 1] = mod2;
//             } else {
//               this.modules[8][15 - i - 1] = mod2;
//             }
//           }
//           this.modules[this.moduleCount - 8][8] = (!test);
//         }

//         setupTypeNumber(test) {
//           const bits = QRCodeModel.getBCHTypeNumber(this.typeNumber);
//           for (let i = 0; i < 18; i++) {
//             const mod = (!test && ((bits >> i) & 1) == 1);
//             this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
//           }
//           for (let i = 0; i < 18; i++) {
//             const mod = (!test && ((bits >> i) & 1) == 1);
//             this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
//           }
//         }

//         mapData(data, maskPattern) {
//           let inc = -1;
//           let row = this.moduleCount - 1;
//           let bitIndex = 7;
//           let byteIndex = 0;
//           const maskFunc = QRCodeModel.getMaskFunc(maskPattern);
//           for (let col = this.moduleCount - 1; col > 0; col -= 2) {
//             if (col == 6) col--;
//             while (true) {
//               for (let c = 0; c < 2; c++) {
//                 if (this.modules[row][col - c] == null) {
//                   let dark = false;
//                   if (byteIndex < data.length) {
//                     dark = ((data[byteIndex] >>> bitIndex) & 1) == 1;
//                   }
//                   const mask = maskFunc(row, col - c);
//                   if (mask) {
//                     dark = !dark;
//                   }
//                   this.modules[row][col - c] = dark;
//                   bitIndex--;
//                   if (bitIndex == -1) {
//                     byteIndex++;
//                     bitIndex = 7;
//                   }
//                 }
//               }
//               row += inc;
//               if (row < 0 || this.moduleCount <= row) {
//                 row -= inc;
//                 inc = -inc;
//                 break;
//               }
//             }
//           }
//         }

//         static getBCHTypeInfo(data) {
//           const G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
//           const G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
//           let d = data << 10;
//           while (QRCodeModel.getBCHDigit(d) - QRCodeModel.getBCHDigit(G15) >= 0) {
//             d ^= G15 << (QRCodeModel.getBCHDigit(d) - QRCodeModel.getBCHDigit(G15));
//           }
//           return ((data << 10) | d) ^ G15_MASK;
//         }

//         static getBCHTypeNumber(data) {
//           const G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
//           let d = data << 12;
//           while (QRCodeModel.getBCHDigit(d) - QRCodeModel.getBCHDigit(G18) >= 0) {
//             d ^= G18 << (QRCodeModel.getBCHDigit(d) - QRCodeModel.getBCHDigit(G18));
//           }
//           return (data << 12) | d;
//         }

//         static getBCHDigit(data) {
//           let digit = 0;
//           while (data != 0) {
//             digit++;
//             data >>>= 1;
//           }
//           return digit;
//         }

//         static getPatternPosition(typeNumber) {
//           return QRCodeModel.PATTERN_POSITION_TABLE[typeNumber - 1];
//         }

//         static getMaskFunc(maskPattern) {
//           switch (maskPattern) {
//             case 0: return function (i, j) { return (i + j) % 2 == 0; };
//             case 1: return function (i, j) { return i % 2 == 0; };
//             case 2: return function (i, j) { return j % 3 == 0; };
//             case 3: return function (i, j) { return (i + j) % 3 == 0; };
//             case 4: return function (i, j) { return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0; };
//             case 5: return function (i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
//             case 6: return function (i, j) { return ((i * j) % 2 + (i * j) % 3) % 2 == 0; };
//             case 7: return function (i, j) { return ((i * j) % 3 + (i + j) % 2) % 2 == 0; };
//             default: throw new Error("bad maskPattern:" + maskPattern);
//           }
//         }

//         getBestMaskPattern() {
//           let minLostPoint = 0;
//           let pattern = 0;
//           for (let i = 0; i < 8; i++) {
//             this.makeImpl(true, i);
//             const lostPoint = QRCodeModel.getLostPoint(this);
//             if (i == 0 || minLostPoint > lostPoint) {
//               minLostPoint = lostPoint;
//               pattern = i;
//             }
//           }
//           return pattern;
//         }

//         static getLostPoint(qrCode) {
//           const moduleCount = qrCode.getModuleCount();
//           let lostPoint = 0;
//           for (let row = 0; row < moduleCount; row++) {
//             for (let col = 0; col < moduleCount; col++) {
//               let sameCount = 0;
//               const dark = qrCode.isDark(row, col);
//               for (let r = -1; r <= 1; r++) {
//                 if (row + r < 0 || moduleCount <= row + r) {
//                   continue;
//                 }
//                 for (let c = -1; c <= 1; c++) {
//                   if (col + c < 0 || moduleCount <= col + c) {
//                     continue;
//                   }
//                   if (r == 0 && c == 0) {
//                     continue;
//                   }
//                   if (dark == qrCode.isDark(row + r, col + c)) {
//                     sameCount++;
//                   }
//                 }
//               }
//               if (sameCount > 5) {
//                 lostPoint += (3 + sameCount - 5);
//               }
//             }
//           }

//           for (let row = 0; row < moduleCount - 1; row++) {
//             for (let col = 0; col < moduleCount - 1; col++) {
//               let count = 0;
//               if (qrCode.isDark(row, col)) count++;
//               if (qrCode.isDark(row + 1, col)) count++;
//               if (qrCode.isDark(row, col + 1)) count++;
//               if (qrCode.isDark(row + 1, col + 1)) count++;
//               if (count == 0 || count == 4) {
//                 lostPoint += 3;
//               }
//             }
//           }

//           for (let row = 0; row < moduleCount; row++) {
//             for (let col = 0; col < moduleCount - 6; col++) {
//               if (qrCode.isDark(row, col) &&
//                 !qrCode.isDark(row, col + 1) &&
//                 qrCode.isDark(row, col + 2) &&
//                 qrCode.isDark(row, col + 3) &&
//                 qrCode.isDark(row, col + 4) &&
//                 !qrCode.isDark(row, col + 5) &&
//                 qrCode.isDark(row, col + 6)) {
//                 lostPoint += 40;
//               }
//             }
//           }

//           for (let col = 0; col < moduleCount; col++) {
//             for (let row = 0; row < moduleCount - 6; row++) {
//               if (qrCode.isDark(row, col) &&
//                 !qrCode.isDark(row + 1, col) &&
//                 qrCode.isDark(row + 2, col) &&
//                 qrCode.isDark(row + 3, col) &&
//                 qrCode.isDark(row + 4, col) &&
//                 !qrCode.isDark(row + 5, col) &&
//                 qrCode.isDark(row + 6, col)) {
//                 lostPoint += 40;
//               }
//             }
//           }

//           let darkCount = 0;
//           for (let col = 0; col < moduleCount; col++) {
//             for (let row = 0; row < moduleCount; row++) {
//               if (qrCode.isDark(row, col)) {
//                 darkCount++;
//               }
//             }
//           }

//           const ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
//           lostPoint += ratio * 10;
//           return lostPoint;
//         }

//         static createData(typeNumber, errorCorrectLevel, dataList) {
//           const rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
//           const buffer = new QRBitBuffer();
//           for (let i = 0; i < dataList.length; i++) {
//             const data = dataList[i];
//             buffer.put(data.mode, 4);
//             buffer.put(data.getLength(), QRCodeUtil.getLengthInBits(data.mode, typeNumber));
//             data.write(buffer);
//           }

//           let totalDataCount = 0;
//           for (let i = 0; i < rsBlocks.length; i++) {
//             totalDataCount += rsBlocks[i].dataCount;
//           }

//           if (buffer.getLengthInBits() > totalDataCount * 8) {
//             throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
//           }

//           if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
//             buffer.put(0, 4);
//           }

//           while (buffer.getLengthInBits() % 8 != 0) {
//             buffer.putBit(false);
//           }

//           while (true) {
//             if (buffer.getLengthInBits() >= totalDataCount * 8) {
//               break;
//             }
//             buffer.put(QRCode.PAD0, 8);
//             if (buffer.getLengthInBits() >= totalDataCount * 8) {
//               break;
//             }
//             buffer.put(QRCode.PAD1, 8);
//           }

//           return QRCode.createBytes(buffer, rsBlocks);
//         }

//         static createBytes(buffer, rsBlocks) {
//           let offset = 0;
//           let maxDcCount = 0;
//           let maxEcCount = 0;
//           const dcdata = new Array(rsBlocks.length);
//           const ecdata = new Array(rsBlocks.length);
//           for (let r = 0; r < rsBlocks.length; r++) {
//             const dcCount = rsBlocks[r].dataCount;
//             const ecCount = rsBlocks[r].totalCount - dcCount;
//             maxDcCount = Math.max(maxDcCount, dcCount);
//             maxEcCount = Math.max(maxEcCount, ecCount);
//             dcdata[r] = new Array(dcCount);
//             for (let i = 0; i < dcdata[r].length; i++) {
//               dcdata[r][i] = 0xff & buffer.buffer[i + offset];
//             }
//             offset += dcCount;
//             const rsPoly = QRCodeUtil.getErrorCorrectPolynomial(ecCount);
//             const rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
//             const modPoly = rawPoly.mod(rsPoly);
//             ecdata[r] = new Array(rsPoly.getLength() - 1);
//             for (let i = 0; i < ecdata[r].length; i++) {
//               const modIndex = i + modPoly.getLength() - ecdata[r].length;
//               ecdata[r][i] = (modIndex >= 0) ? modPoly.get(modIndex) : 0;
//             }
//           }
//           let totalCodeCount = 0;
//           for (let i = 0; i < rsBlocks.length; i++) {
//             totalCodeCount += rsBlocks[i].totalCount;
//           }
//           const data = new Array(totalCodeCount);
//           let index = 0;
//           for (let i = 0; i < maxDcCount; i++) {
//             for (let r = 0; r < rsBlocks.length; r++) {
//               if (i < dcdata[r].length) {
//                 data[index++] = dcdata[r][i];
//               }
//             }
//           }
//           for (let i = 0; i < maxEcCount; i++) {
//             for (let r = 0; r < rsBlocks.length; r++) {
//               if (i < ecdata[r].length) {
//                 data[index++] = ecdata[r][i];
//               }
//             }
//           }
//           return data;
//         }
//       }

//       class QRRSBlock {
//         constructor(totalCount, dataCount) {
//           this.totalCount = totalCount;
//           this.dataCount = dataCount;
//         }

//         static getRSBlocks(typeNumber, errorCorrectLevel) {
//           const rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
//           if (rsBlock == undefined) {
//             throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
//           }
//           const length = rsBlock.length / 3;
//           const list = new Array();
//           for (let i = 0; i < length; i++) {
//             const count = rsBlock[i * 3 + 0];
//             const totalCount = rsBlock[i * 3 + 1];
//             const dataCount = rsBlock[i * 3 + 2];
//             for (let j = 0; j < count; j++) {
//               list.push(new QRRSBlock(totalCount, dataCount));
//             }
//           }
//           return list;
//         }

//         static getRsBlockTable(typeNumber, errorCorrectLevel) {
//           switch (errorCorrectLevel) {
//             case QRErrorCorrectLevel.L:
//               return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
//             case QRErrorCorrectLevel.M:
//               return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
//             case QRErrorCorrectLevel.Q:
//               return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
//             case QRErrorCorrectLevel.H:
//               return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
//             default:
//               return undefined;
//           }
//         }
//       }
//     }
//   })
// }
// export default QrGenerater
