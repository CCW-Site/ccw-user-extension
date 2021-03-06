import Cast from '../utils/cast.js'
import Color from '../utils/color.js'
// import cover from './assets/icon.svg'
// import icon from './assets/icon.svg'

console.log(Cast.toNumber('123'))
console.log(Cast.toNumber('aab'))
class ArkosExtensions {
  constructor(runtime) {
    this.runtime = runtime
    this.tempData={}
    this.sortedTable={
      list1:{order:'desc',list:[]},
      list2:{order:'desc',list:[]},
    }
    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'ArkosExt.extensionName': 'Arkosã®æå±',
        'ArkosExt.info1': 'ð¶ åæ åæ¹å',
        'ArkosExt.info2': 'ð  å­ç¬¦ä¸²å¤ç',
        'ArkosExt.info3': 'ð  å®ç¨ç§¯æ¨',
        'ArkosExt.info4': 'ð ä¿¡æ¯è·å',
        'ArkosExt.info5': 'ð æåºè¡¨',
        'ArkosExt.info6': 'ðï¸ ä¸´æ¶åé',
        'ArkosExt.stringEquality': '(åºåå¤§å°å)[ONE]=[TWO]',
        'ArkosExt.directionFromAtoB': 'ç¹x1:[X1]y1:[Y1]æåç¹x2:[X2]y2:[Y2]çæ¹å',
        'ArkosExt.differenceBetweenDirections': 'ç±æ¹å1[a]å°æ¹å2[b]çè§åº¦å·®',
        'ArkosExt.distance': 'ç¹x1:[X1]y1:[Y1]å°ç¹x2:[X2]y2:[Y2]çè·ç¦»',
        'ArkosExt.searchString': 'å¨[str]ä¸­æ¥æ¾[substr]çä½ç½®(ä»ä½ç½®[pos]å¼å§æ¾)',
        'ArkosExt.insertString': 'å¨[str]çç¬¬[pos]ä¸ªå­ç¬¦åæå¥[substr]',
        'ArkosExt.replaceString': 'å°[str]ä¸­çç¬¬[start]ä¸ªå°ç¬¬[end]ä¸ªå­ç¬¦,æ¿æ¢ä¸º[substr]',
        'ArkosExt.turnDegreesToDir': 'ææ¹å[dir]æè½¬[degree]åº¦',

        'ArkosExt.getEffect': 'è·åç¹æ[EFFECT]çå¼',
        'ArkosExt.color': 'é¢è²',
        'ArkosExt.fisheye': 'é±¼ç¼',
        'ArkosExt.whirl': 'ææ¶¡',
        'ArkosExt.pixelate': 'åç´ å',
        'ArkosExt.mosaic': 'é©¬èµå',
        'ArkosExt.brightness': 'äº®åº¦',
        'ArkosExt.ghost': 'èå',

        'ArkosExt.isHiding': 'è§è²éèï¼',
        'ArkosExt.getRotationStyle': 'å½åæè½¬æ¹å¼',
        'ArkosExt.getWidthOrHeight': 'è·åå½åé åç[t]',
        'ArkosExt.setSize': 'â ï¸å¼ºè¡å°å¤§å°è®¾ä¸º[size]ï¼æ è§éå¶ï¼',
        'ArkosExt.width': 'å®½',
        'ArkosExt.height': 'é«',

        'ArkosExt.setXY': 'â ï¸å¼ºè¡ç§»å°x:[x]y:[y]ï¼æ è§è¾¹çï¼',
        'ArkosExt.getBoundaryCoord': 'è·åè§è²ç[t]',
        'ArkosExt.top': 'ä¸è¾¹ç¼y',
        'ArkosExt.bottom': 'ä¸è¾¹ç¼y',
        'ArkosExt.left': 'å·¦è¾¹ç¼x',
        'ArkosExt.right': 'å³è¾¹ç¼x',
        'ArkosExt.isOutOfSight': 'è§è²ç§»å°èå°åºå¤ï¼',

        'ArkosExt.and': 'ä¸',
        'ArkosExt.or': 'æ',
        
        'ArkosExt.clearSortedTable': 'ðæ¸ç©ºæåºè¡¨[list]',
        'ArkosExt.setTypeOfSortedTable': 'ðå°æåºè¡¨[list]çæåºæ¹å¼è®¾ä¸º[type]',
        'ArkosExt.addToSortedTable': 'ðå°åå®¹(éåçåè¦ç)[name],æåºå¼[value]å å¥æåºè¡¨[list],éå ä¿¡æ¯[extra]',
        'ArkosExt.getFromSortedTableByNo': 'ðè·åæåºè¡¨[list]ä¸­ç¬¬[n]é¡¹ç[t]',
        'ArkosExt.getFromSortedTableByName': 'ðè·å[name]å¨æåºè¡¨[list]ä¸­ç[t]',
        'ArkosExt.lengthOfSortedTable': 'ðæåºè¡¨[list]ä¸­åå®¹æ°',
        'ArkosExt.deleteNameOfSortedTable': 'ðå é¤æåºè¡¨[list]ä¸­åä¸º[name]çé¡¹',
        'ArkosExt.asc': 'ååº',
        'ArkosExt.desc': 'éåº',

        'ArkosExt.name': 'åç§°',
        'ArkosExt.rank': 'è¡¨ä¸­ä½ç½®',
        'ArkosExt.rankValue': 'æåºå¼',
        'ArkosExt.extra': 'éå ä¿¡æ¯',

        'ArkosExt.colorToHex': 'é¢è²[COLOR]çä»£ç ',

        'ArkosExt.deleteAllTempData': 'ðï¸æ¸ç©ºææä¸´æ¶æ°æ®',
        'ArkosExt.getCountOfTempData': 'ðï¸ä¸´æ¶æ°æ®é',
        'ArkosExt.delTempData': 'ðï¸å é¤åä¸º[data]çä¸´æ¶æ°æ®',

        'ArkosExt.setTempVar': 'ðï¸å°ä¸´æ¶åé[var]è®¾ä¸º[t]',
        'ArkosExt.addTempVar': 'ðï¸å°ä¸´æ¶åé[var]å¢å [t]',
        'ArkosExt.getTempVar': 'ðï¸ä¸´æ¶åé[var]',

        'ArkosExt.clearTempList': 'ðï¸åå»ºææ¸ç©ºä¸´æ¶åè¡¨[list]',
        'ArkosExt.initTempList': 'ðï¸ä¸´æ¶åè¡¨[list]åå®¹è®¾ä¸º[t]',
        'ArkosExt.addTempList': 'ðï¸åä¸´æ¶åè¡¨[list]å å¥[t]',
        'ArkosExt.opTempList': 'ðï¸å°ä¸´æ¶åè¡¨[list]ç¬¬[n]é¡¹[op][t]',
        'ArkosExt.ListOp1': 'åæå¥',
        'ArkosExt.ListOp2': 'æ¿æ¢ä¸º',
        'ArkosExt.ListOp3': 'å¢å ',
        'ArkosExt.delItemOfTempList': 'ðï¸å é¤ä¸´æ¶åè¡¨[list]ç¬¬[n]é¡¹',
        'ArkosExt.getItemOfTempList': 'ðï¸ä¸´æ¶åè¡¨[list]ç¬¬[n]é¡¹',
        'ArkosExt.lengthOfTempList': 'ðï¸ä¸´æ¶åè¡¨[list]é¿åº¦',
      },

      en: {
        'ArkosExt.extensionName': "Arkos' Extensions",
        'ArkosExt.stringEquality': '(case sensitive)[ONE]=[TWO]',
        'ArkosExt.directionFromAtoB': 'direction from x1:[X1]y1:[Y1]to x2:[X2]y2:[Y2]',
        'ArkosExt.differenceBetweenDirections': 'direction[b] minus direction[a]',
        'ArkosExt.distance': 'distance between x1:[X1]y1:[Y1]and x2:[X2]y2:[Y2]',
        'ArkosExt.searchString': 'position of[substr]in[str],start from[pos]',
        'ArkosExt.insertString': 'insert[substr]at[pos]of[str]',
        'ArkosExt.replaceString': 'replace from[start]to[end]of[str],with[substr]',
        'ArkosExt.turnDegreesToDir': 'turn[degree] degrees toward direction[dir]',
        'ArkosExt.getEffect': 'effect[EFFECT]',
        'ArkosExt.color': 'color',
        'ArkosExt.fisheye': 'fisheye',
        'ArkosExt.whirl': 'whirl',
        'ArkosExt.pixelate': 'pixelate',
        'ArkosExt.mosaic': 'mosaic',
        'ArkosExt.brightness': 'brightness',
        'ArkosExt.ghost': 'ghost',
        'ArkosExt.isHiding': 'is hiding?',
        'ArkosExt.getRotationStyle': 'rotation style',
        'ArkosExt.getWidthOrHeight': 'get [t] of the current costume',
        'ArkosExt.setSize': 'â ï¸force the size to [size] % (regardless of limitation) ',
        'ArkosExt.width': 'width',
        'ArkosExt.height': 'height',

        'ArkosExt.setXY': 'â ï¸force to x:[x]y:[y] (regardless of the boundary)',
        'ArkosExt.getBoundaryCoord': 'get [t] of the sprite',
        'ArkosExt.top': 'top y',
        'ArkosExt.bottom': 'bottom y',
        'ArkosExt.left': 'left x',
        'ArkosExt.right': 'right x',
        'ArkosExt.isOutOfSight': 'is out of stage?',

        'ArkosExt.and': 'and',
        'ArkosExt.or': 'or',

        'ArkosExt.clearSortedTable': 'ðempty sorted table[list]',
        'ArkosExt.setTypeOfSortedTable': 'ðset sort order of[list]to[type]',
        'ArkosExt.addToSortedTable': 'ðadd (overwrite if existed)[name]to table[list] with sort index value[value],extra data[extra] and sort',
        'ArkosExt.getFromSortedTableByNo': 'ðget[t]of #[n] from [list]',
        'ArkosExt.getFromSortedTableByName': 'ðget[t]of [name] from [list]',
        'ArkosExt.lengthOfSortedTable': 'ðlength of sorted table[list]',
        'ArkosExt.deleteNameOfSortedTable': 'ðdelete [name] in[list]',
        'ArkosExt.asc': 'ascending order',
        'ArkosExt.desc': 'descending order',

        'ArkosExt.name': 'name',
        'ArkosExt.rank': 'rank',
        'ArkosExt.rankValue': 'rankValue',
        'ArkosExt.extra': 'extra',

        'ArkosExt.colorToHex': 'get code of color[COLOR]',
        
        'ArkosExt.info1': 'ð¶ Coordinate and Direction',
        'ArkosExt.info2': 'ð  String Processing',
        'ArkosExt.info3': 'ð  Utilities',
        'ArkosExt.info4': 'ð Information',
        'ArkosExt.info5': 'ð Sorted Table',
        'ArkosExt.info6': 'ðï¸ Temporary Data',

        'ArkosExt.deleteAllTempData': 'ðï¸clear all temporary data',
        'ArkosExt.getCountOfTempData': 'ðï¸count of temporary data',
        'ArkosExt.delTempData': 'ðï¸delete temporary data[data]',

        'ArkosExt.setTempVar': 'ðï¸set temp var[var] to [t]',
        'ArkosExt.addTempVar': 'ðï¸change temp var[var] by [t]',
        'ArkosExt.getTempVar': 'ðï¸temp var[var]',

        
        'ArkosExt.clearTempList': 'ðï¸create or clear temp list[list]',
        'ArkosExt.initTempList': 'ðï¸set temp list[list]to[t]',
        'ArkosExt.addTempList': 'ðï¸add[t] to temp list[list]',
        'ArkosExt.opTempList': 'ðï¸[op][t]at [n] of temp list[list]',
        'ArkosExt.ListOp1': 'insert',
        'ArkosExt.ListOp2': 'replace with',
        'ArkosExt.ListOp3': 'change by',
        'ArkosExt.delItemOfTempList': 'ðï¸delete [n]of temp list[list]',
        'ArkosExt.getItemOfTempList': 'ðï¸item[n]of temp list[list]',
        'ArkosExt.lengthOfTempList': 'ðï¸length of temp list[list]',
      },
    })
  }

  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    })
  }

  getInfo() {
    return {
      id: 'hcnTest', // æå±id
      name: this.formatMessage('ArkosExt.extensionName'), 

      color1: '#FF8383',
      // menuIconURI: icon,
      // blockIconURI: icon,
      blocks: [
        "---" + this.formatMessage("ArkosExt.info1"),  //ð åæ &è§åº¦   
        // è®¡ç®ç¹Aå°ç¹Bçæ¹å
        {
          opcode: 'getDirFromAToB',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.directionFromAtoB'),
          arguments: {
            X1: {
              type: 'number',
              defaultValue: 0,
            },
            Y1: {
              type: 'number',
              defaultValue: 0,
            },
            X2: {
              type: 'number',
              defaultValue: 0,
            },
            Y2: {
              type: 'number',
              defaultValue: 0,
            },
          },
        },
        // è®¡ç®è§b-è§açè§åº¦å·®
        {
          opcode: 'differenceBetweenDirections',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.differenceBetweenDirections'),
          arguments: {
            a: {
              type: 'number',
              defaultValue: 0,
            },
            b: {
              type: 'number',
              defaultValue: 0,
            },
          },
        },
        // ä¸¤ç¹è·ç¦»
        {
          opcode: 'disFromAToB',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.distance'),
          arguments: {
            X1: {
              type: 'number',
              defaultValue: 0,
            },
            Y1: {
              type: 'number',
              defaultValue: 0,
            },
            X2: {
              type: 'number',
              defaultValue: 0,
            },
            Y2: {
              type: 'number',
              defaultValue: 0,
            },
          },
        },
        //æ..æ¹åæè½¬..è§åº¦
        {
          opcode: 'turnDegreesToDir',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.turnDegreesToDir'),
          arguments: {
            degree: {
              type: 'number',
              defaultValue: 45,
            },
            dir: {
              type: 'angle',
              defaultValue: 10,
            },
          },
          filter: ['sprite']
        },
        "---" + this.formatMessage("ArkosExt.info2"),  //ð å­ç¬¦ä¸²å¤ç 
        // æ¥æ¾å­å­ç¬¦ä¸²ï¼ä»poså¼å§
        {
          opcode: 'indexof',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.searchString'),
          arguments: {
            str: {
              type: 'string',
              defaultValue: 'banana',
            },
            substr: {
              type: 'string',
              defaultValue: 'na',
            },
            pos: {
              type: 'number',
              defaultValue: 1,
            },
          },
        },
        // å¨å­ç¬¦ä¸²ä¸­æå¥å­å­ç¬¦ä¸²
        {
          opcode: 'insertStr',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.insertString'),
          arguments: {
            str: {
              type: 'string',
              defaultValue: 'ac',
            },
            substr: {
              type: 'string',
              defaultValue: 'b',
            },
            pos: {
              type: 'number',
              defaultValue: 2,
            },
          },
        },
        // æ¿æ¢å­ç¬¦ä¸²ä¸­çä»..å°..çå­ç¬¦ä¸²
        {
          opcode: 'replaceStr',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.replaceString'),
          arguments: {
            str: {
              type: 'string',
              defaultValue: 'ABCDEF',
            },
            substr: {
              type: 'string',
              defaultValue: 'XX',
            },
            start: {
              type: 'number',
              defaultValue: 3,
            },
            end: {
              type: 'number',
              defaultValue: 4,
            },
          },
        },
        "---" + this.formatMessage("ArkosExt.info3"),  //ð§å®ç¨ç§¯æ¨
        // å¤æ­ç¸ç­ï¼åºåå¤§å°åï¼
        {
          opcode: 'strictlyEquals',
          blockType: 'Boolean',
          text: this.formatMessage('ArkosExt.stringEquality'),
          arguments: {
            ONE: {
              type: 'string',
              defaultValue: 'A',
            },
            TWO: {
              type: 'string',
              defaultValue: 'a',
            },
          },
        },
        //è¿åå¼è½¬boolç§¯æ¨
        {
          opcode: 'reporterToBoolean',
          blockType: 'Boolean',
          text: '[t]',
          arguments: {
            t: {
              type: 'string',
              defaultValue: '1',
            }
          },
        },
        //å½¢å¦ aâ¤bâ¤c
        {
          opcode: 'compareTwoSides',
          blockType: 'Boolean',
          text: '[a][op1][b][op2][c]',
          arguments: {
            a: {
              type: 'string',
              defaultValue: '1',
            },
            b: {
              type: 'string',
              defaultValue: 'x',
            },
            c: {
              type: 'string',
              defaultValue: '3',
            },
            op1: {
              type: 'string',
              menu: 'opMenu1',
            },
            op2: {
              type: 'string',
              menu: 'opMenu1',
            },
          },
        },
        //å½¢å¦ï¼aâ¤bä¸/æ>c op1,op2 logic  compareTwoSidesPlus
        {
          opcode: 'compareTwoSidesPlus',
          blockType: 'Boolean',
          text: '[a][op1][b][logic][op2][c]',
          arguments: {
            a: {
              type: 'string',
              defaultValue: 'x',
            },
            b: {
              type: 'string',
              defaultValue: '1',
            },
            c: {
              type: 'string',
              defaultValue: '3',
            },
            op1: {
              type: 'string',
              menu: 'opMenu2',
              defaultValue: '<',
            },
            op2: {
              type: 'string',
              menu: 'opMenu2',
              defaultValue: '>',
            },
            logic: {
              type: 'string',
              menu: 'logicMenu',
              defaultValue: 'or',//
            },
          },
        },
        //è·åé¢è²HEX
        {
          opcode: 'colorToHex',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.colorToHex'),
          arguments: {
            COLOR: {
              type: 'color',
              //defaultValue: '1',
            },
          },
        },
        //å¼ºè¡è®¾ç½®å¤§å°
        {
          opcode: 'setSize',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.setSize'),
          arguments: {
            size: {
              type: 'number',
              defaultValue: 9999,
            },
          },
          filter: ['sprite']
        },
        //å¼ºè¡ç§»å°xy
        {
          opcode: 'setXY',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.setXY'),
          arguments: {
            x: {
              type: 'number',
              defaultValue: 100000,
            },
            y: {
              type: 'number',
              defaultValue: 100000,
            },
          },
          filter: ['sprite']
        },
        "---" + this.formatMessage("ArkosExt.info4"),  //ðæ°æ®è·å 
        //è·åç¹æå¼
        {
          opcode: 'getEffect',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.getEffect'),
          arguments: {
            EFFECT: {
              type: 'string',
              menu: 'effectMenu',
            },
          },
        },
        //æ¯å¦éè
        {
          opcode: 'isHiding',
          blockType: 'Boolean',
          text: this.formatMessage('ArkosExt.isHiding'),
          filter: ['sprite']
        },
        //è·åæè½¬æ¹å¼
        {
          opcode: 'getRotationStyle',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.getRotationStyle'),
          filter: ['sprite']
        },
        //è·åé å0å®½1é«
        {
          opcode: 'getWidthOrHeight',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.getWidthOrHeight'),
          arguments: {
            t: {
              type: 'string',
              menu: 'WOrH',
            },
          },
        },
        //è·åè§è²è¾¹ç¼xy
        {
          opcode: 'getBoundaryCoord',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.getBoundaryCoord'),
          arguments: {
            t: {
              type: 'string',
              menu: 'boundaryMenu',
            }
          },
          filter: ['sprite']
        },
        //æ¯å¦è·å°èå°å¤
        {
          opcode: 'isOutOfSight',
          blockType: 'Boolean',
          text: this.formatMessage('ArkosExt.isOutOfSight'),
          filter: ['sprite']
        },
        "---" + this.formatMessage("ArkosExt.info5"),  //ðæåºè¡¨ 
        //ðæ¸ç©ºæåºè¡¨
        {
          opcode: 'clearSortedTable',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.clearSortedTable'),
          arguments: {
            list: {
              type: 'string',
              menu: 'sortedTableMenu',
            },
          },
        },
        {
          //ðæåºè¡¨æåºæ¹å¼
          opcode: 'setTypeOfSortedTable',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.setTypeOfSortedTable'),
          arguments: {
            list: {
              type: 'string',
              menu: 'sortedTableMenu',
            },
            type: {
              type: 'string',
              menu: 'sortOrder',
            },
          },
        },
        {
          //ðå°XXå å¥æåºè¡¨
          opcode: 'addToSortedTable',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.addToSortedTable'),
          arguments: {
            list: {
              type: 'string',
              menu: 'sortedTableMenu',
            },
            name: {
              type: 'string',
              defaultValue: 'å°æ',
            },
            value: {
              type: 'number',
              defaultValue: '95',
            },
            extra: {
              type: 'string',
              defaultValue: '20212490',
            },
          },
        },
        {
          //ðè·åæåºè¡¨ç¬¬né¡¹
          opcode: 'getFromSortedTableByNo',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.getFromSortedTableByNo'),
          arguments: {
            list: {
              type: 'string',
              menu: 'sortedTableMenu',
            },
            n: {
              type: 'number',
              defaultValue: 1,
            },
            t: {
              type: 'string',
              defaultValue: '1',
              menu: 'tableItemPropertyMenu',
            },
          },
        },
        {
          //ðè·åæåºè¡¨ç¹å®åå­åå®¹
          opcode: 'getFromSortedTableByName',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.getFromSortedTableByName'),
          arguments: {
            list: {
              type: 'string',
              menu: 'sortedTableMenu',
            },
            name: {
              type: 'string',
              defaultValue: 'å°æ',
            },
            t: {
              type: 'string',
              defaultValue: '2',
              menu: 'tableItemPropertyMenu',
            },
          },
        },
        {
          //ðè·åæåºè¡¨é¿åº¦
          opcode: 'lengthOfSortedTable',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.lengthOfSortedTable'),
          arguments: {
            list: {
              type: 'string',
              menu: 'sortedTableMenu',
            },
          },
        },
        {
          //ðå é¤è¡¨ä¸­åå®¹
          opcode: 'deleteNameOfSortedTable',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.deleteNameOfSortedTable'),
          arguments: {
            list: {
              type: 'string',
              menu: 'sortedTableMenu',
            },
            name: {
              type: 'string',
              defaultValue: 'å°æ',
            },
          },
        },

        "---" + this.formatMessage("ArkosExt.info6"),  //ðï¸ ä¸´æ¶åé

        //æ¸ç©ºææä¸´æ¶æ°æ®
        {
          opcode: 'deleteAllTempData',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.deleteAllTempData'),
        },
        //ä¸´æ¶æ°æ®é
        {
          opcode: 'getCountOfTempData',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.getCountOfTempData'),
        },
        //å é¤ä¸´æ¶æ°æ®
        {
          opcode: 'delTempData',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.delTempData'),
          arguments: {
            data: {
              type: 'string',
              defaultValue: 'i',
            },
          },
        },
        //è®¾ç½®ä¸´æ¶æ°æ®
        {
          opcode: 'setTempVar',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.setTempVar'),
          arguments: {
            var: {
              type: 'string',
              defaultValue: 'i',
            },
            t: {
              type: 'string',
              defaultValue: '0',
            },
          },
        },
        //å¢å ä¸´æ¶æ°æ®
        {
          opcode: 'addTempVar',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.addTempVar'),
          arguments: {
            var: {
              type: 'string',
              defaultValue: 'i',
            },
            t: {
              type: 'number',
              defaultValue: 1,
            },
          },
        },
        //å¢å ä¸´æ¶æ°æ®
        {
          opcode: 'getTempVar',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.getTempVar'),
          arguments: {
            var: {
              type: 'string',
              defaultValue: 'i',
            },
          },
        },
        //åå»ºææ¸ç©ºä¸´æ¶åè¡¨
        {
          opcode: 'clearTempList',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.clearTempList'),
          arguments: {
            list: {
              type: 'string',
              defaultValue: 'list',
            },
          },
        },
        //è®¾ç½®ä¸´æ¶åè¡¨
        {
          opcode: 'initTempList',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.initTempList'),
          arguments: {
            list: {
              type: 'string',
              defaultValue: 'list',
            },
            t: {
              type: 'string',
              defaultValue: '[1,2,"apple"]',
            },
          },
        },
        //åä¸´æ¶åè¡¨å å¥
        {
          opcode: 'addTempList',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.addTempList'),
          arguments: {
            list: {
              type: 'string',
              defaultValue: 'list',
            },
            t: {
              type: 'string',
              defaultValue: 'thing',
            },
          },
        },
        //æä½ä¸´æ¶åè¡¨
        {
          opcode: 'opTempList',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.opTempList'),
          arguments: {
            list: {
              type: 'string',
              defaultValue: 'list',
            },
            op: {
              type: 'string',
              menu: 'ListOpMenu',
            },
            n: {
              type: 'number',
              defaultValue: 1,
            },
            t: {
              type: 'string',
              defaultValue: 'thing',
            },
          },
        },
        //å é¤ä¸´æ¶åè¡¨XXé¡¹
        {
          opcode: 'delItemOfTempList',
          blockType: 'command',
          text: this.formatMessage('ArkosExt.delItemOfTempList'),
          arguments: {
            list: {
              type: 'string',
              defaultValue: 'list',
            },
            n: {
              type: 'number',
              defaultValue: 1,
            },
          },
        },
        //è·åä¸´æ¶åè¡¨XXé¡¹
        {
          opcode: 'getItemOfTempList',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.getItemOfTempList'),
          arguments: {
            list: {
              type: 'string',
              defaultValue: 'list',
            },
            n: {
              type: 'number',
              defaultValue: 1,
            },
          },
        },
        //ä¸´æ¶åè¡¨é¿åº¦
        {
          opcode: 'lengthOfTempList',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.lengthOfTempList'),
          arguments: {
            list: {
              type: 'string',
              defaultValue: 'list',
            },
          },
        },
      ],
      menus: {
        ListOpMenu: [
          {
            text: this.formatMessage('ArkosExt.ListOp1'), //æå¥
            value: '1'
          },
          {
            text: this.formatMessage('ArkosExt.ListOp2'), //æ¿æ¢
            value: '2'
          },
          {
            text: this.formatMessage('ArkosExt.ListOp3'), //å¢å 
            value: '3'
          },
        ],
        tableItemPropertyMenu: [
          {
            text: this.formatMessage('ArkosExt.name'),
            value: '1'
          },
          {
            text: this.formatMessage('ArkosExt.rank'),
            value: '2'
          },
          {
            text: this.formatMessage('ArkosExt.rankValue'),
            value: '3'
          },
          {
            text: this.formatMessage('ArkosExt.extra'),
            value: '4'
          },
        ],
        sortOrder: [
          {
            text: this.formatMessage('ArkosExt.asc'),
            value: 'asc'//ååº
          },
          {
            text: this.formatMessage('ArkosExt.desc'),
            value: 'desc'//éåº
          },
        ],
        sortedTableMenu: {
          items: 'findAllSortedTable',
          acceptReporters: true,
        },
        //å¤æ­ç¬¦èå
        opMenu1: ['<','â¤','=','â ',],
        opMenu2: ['<','>','â¤','â¥','=','â ',],
        //logicMenu
        logicMenu: [
          {
            text: this.formatMessage('ArkosExt.or'),
            value: 'or'
          },
          {
            text: this.formatMessage('ArkosExt.and'),
            value: 'and'
          },
        ],
        //è§è²ä¸ä¸å·¦å³è¾¹ç¼
        boundaryMenu: [
          {
            text: this.formatMessage('ArkosExt.top'),
            value: '1'
          },
          {
            text: this.formatMessage('ArkosExt.bottom'),
            value: '2'
          },
          {
            text: this.formatMessage('ArkosExt.left'),
            value: '3'
          },
          {
            text: this.formatMessage('ArkosExt.right'),
            value: '4'
          },
        ],
        //0å®½1é« èå
        WOrH: [
          {
            text: this.formatMessage('ArkosExt.width'),
            value: '0'
          },
          {
            text: this.formatMessage('ArkosExt.height'),
            value: '1'
          },
        ],
        //ç¹æèå
        effectMenu: [
          {
            text: this.formatMessage('ArkosExt.color'),
            value: 'color'
          },
          {
            text: this.formatMessage('ArkosExt.fisheye'),
            value: 'fisheye'
          },
          {
            text: this.formatMessage('ArkosExt.whirl'),
            value: 'whirl'
          },
          {
            text: this.formatMessage('ArkosExt.pixelate'),
            value: 'pixelate'
          },
          {
            text: this.formatMessage('ArkosExt.mosaic'),
            value: 'mosaic'
          },
          {
            text: this.formatMessage('ArkosExt.brightness'),
            value: 'brightness'
          },
          {
            text: this.formatMessage('ArkosExt.ghost'),
            value: 'ghost'
          }
        ]
      },
    }
  }

  strictlyEquals(args) {
    // å®éä¸å¨è¿éç´æ¥ä½¿ç¨ä¸¥æ ¼ç¸ç­æ¯ä¸å¤ªææºçï¼å ä¸ºæä¸å®çå¯è½ä¼éå°æ°å­åå­ç¬¦æ¯è¾ï¼
    // èå¨Scratchä¸­æ°å­åå­ç¬¦å¨è¡¨ç°å®å¨ä¸æ ·çæ¶åå ä¹æ²¡æåºå«ã
    // å æ­¤åä¸Cast.toString()ä»¥ä½¿å¾æ°å­åå­ç¬¦è½å¤æ­£å¸¸æ¯è¾ï¼ç±»ä¼¼ 9 = "9" )
    return Cast.toString(args.ONE) === Cast.toString(args.TWO)
  }

  getDirFromAToB(args) {
    // ä¸å®è¦åè½¬åä¸ºæ°å­ï¼
    const X1 = Cast.toNumber(args.X1)
    const X2 = Cast.toNumber(args.X2)
    const Y1 = Cast.toNumber(args.Y1)
    const Y2 = Cast.toNumber(args.Y2)

    // è¿éå©ç¨atanå½æ°çæ§è´¨atan(+inf)=90,atan(-inf)=-90,atan(NaN)=NaNå¯ä»¥çå¾å¤ä»£ç 
    let a = Math.atan((X2 - X1) / (Y2 - Y1)) / Math.PI * 180 + (Y1 > Y2 ? 180 : 0)
    if (a > 180) a -= 360
    return a;
  }

  differenceBetweenDirections(args) {
    const a = Cast.toNumber(args.a)
    const b = Cast.toNumber(args.b)
    let dif = b - a
    dif -= Math.round(dif / 360) * 360
    if (dif === -180) dif = 180
    return dif
  }

  disFromAToB(args) {
    const X1 = Cast.toNumber(args.X1)
    const X2 = Cast.toNumber(args.X2)
    const Y1 = Cast.toNumber(args.Y1)
    const Y2 = Cast.toNumber(args.Y2)
    return Math.sqrt((X1 - X2) * (X1 - X2) + (Y1 - Y2) * (Y1 - Y2))
  }

  indexof(args) {
    const str = Cast.toString(args.str)
    const substr = Cast.toString(args.substr)
    const a = str.indexOf(substr, Cast.toNumber(args.pos) - 1)
    if (a === -1) {
      // Scratchåè¡¨ä¸­ä¹ææ¥è¯¢ç§¯æ¨ï¼å¶ä¸­æ¾ä¸å°è¿åçæ¯0ãå»ºè®®ç»´æåæçé£æ ¼ã
      return 0
    }
    return a + 1
  }

  insertStr(args) {
    const str = Cast.toString(args.str)
    const substr = Cast.toString(args.substr)
    let pos = Cast.toNumber(args.pos) - 1
    if (pos < 0) {
      pos = 0
    }
    return str.slice(0, pos) + substr + str.slice(pos)
  }

  replaceStr(args) {
    const str = Cast.toString(args.str)
    const substr = Cast.toString(args.substr)
    let start = Cast.toNumber(args.start)
    let end = Cast.toNumber(args.end)
    if (start > end) {
      const t = end
      end = start
      start = t
    }
    if (start < 1) start = 1
    return str.slice(0, start - 1) + substr + str.slice(end)
  }


  turnDegreesToDir(args, util) {
    const degree = Cast.toNumber(args.degree);
    const dir = Cast.toNumber(args.dir);
    const dif = this.differenceBetweenDirections({a: util.target.direction, b: dir});
    if(Math.abs(dif) < degree) 
      util.target.setDirection(dir);
    else if(dif < 0)
      util.target.setDirection(util.target.direction - degree);
    else
      util.target.setDirection(util.target.direction + degree);
  }

  //è·åç¹æçæ°å¼
  getEffect (args, util) {
    let effect = Cast.toString(args.EFFECT).toLowerCase();
    if (!util.target.effects.hasOwnProperty(effect)) return 0;
    return util.target.effects[effect];
  }

  //è§è²æ¯å¦å¯è§
  isHiding (args, util) {
    return  !util.target.visible;
  }

  //è·åå¾å±(éä¸é)
  // getLayer (args, util) {
  //   return util.target.layer;
  // }

  //è·åå½åè§è²çæè½¬æ¹å¼
  getRotationStyle (args, util) {
    return util.target.rotationStyle;
  }

  //è·åå½åé åçé¿/å®½
  getWidthOrHeight (args, util) {
    const costumeSize = util.target.renderer.getCurrentSkinSize(util.target.drawableID);
    return costumeSize[args.t];
  }

  //å¼ºè¡è®¾ç½®å¤§å°(éä¸é)
  setSize (args, util) {
    if (util.target.isStage) {
        return;
    }
    if (util.target.renderer) {
        args.size = this._clamp(Cast.toNumber(args.size),0.1,100000000)
        util.target.size = args.size;
        const {direction, scale} = util.target._getRenderedDirectionAndScale();
        util.target.renderer.updateDrawableDirectionScale(util.target.drawableID, direction, scale);
        if (util.target.visible) {
            util.target.emit('EVENT_TARGET_VISUAL_CHANGE', util.target);
            util.target.runtime.requestRedraw();
        }
    }
    util.target.runtime.requestTargetsUpdate(util.target);
  }

  _clamp (n, min, max) {
        return Math.min(Math.max(n, min), max);
  }
  
  //å¼ºè¡è®¾ç½®XY(éä¸é)
  setXY (args, util) {
    if (util.target.isStage) return;
    args.x = this._clamp(Cast.toNumber(args.x),-100000000,100000000)
    args.y = this._clamp(Cast.toNumber(args.y),-100000000,100000000)
    const oldX = util.target.x;
    const oldY = util.target.y;
    util.target.x = args.x;
    util.target.y = args.y;
    if (util.target.renderer) {
        util.target.renderer.updateDrawablePosition(util.target.drawableID, [args.x, args.y]);
        if (util.target.visible) {
            util.target.emit('EVENT_TARGET_VISUAL_CHANGE', util.target);
            util.target.runtime.requestRedraw();
        }
    } else {
        util.target.x = x;
        util.target.y = y;
    }
    util.target.emit('TARGET_MOVED', util.target, oldX, oldY, false);
    util.target.runtime.requestTargetsUpdate(util.target);
  }

  //è·åè§è²è¾¹ç¼çåæ 
  getBoundaryCoord (args, util) {
    const bounds = util.target.runtime.renderer.getBounds(util.target.drawableID);
    switch(args.t){
      case '1':
        return bounds.top;
      case '2':
        return bounds.bottom;
      case '3':
        return bounds.left;
      case '4':
        return bounds.right;
      default:
        return '';
    }
  }

  //æ¯å¦å¨èå°å¤
  isOutOfSight (args, util) {
    // console.log(util.target.runtime.renderer)
    // console.log(util.target.renderer)
    if (util.target.renderer) {
        const stageWidth = util.target.runtime.stageWidth;
        const stageHeight = util.target.runtime.stageHeight;
        console.log('stageWidth',stageWidth);
        console.log('stageHeight',stageHeight);
        const bounds = util.target.runtime.renderer.getBounds(util.target.drawableID);
        if (bounds.right < -stageWidth / 2 ||
            bounds.left > stageWidth / 2 ||
            bounds.bottom > stageHeight / 2 ||
            bounds.top < -stageHeight / 2) {
            return true;
        }
    }
    return false;
  }

  //å½¢å¦ï¼<() >
  reporterToBoolean (args){
    if(Cast.toString(args.t).toLowerCase() === 'false') return false;
    if(args.t === '0') return false;
    return (args.t) ? true : false;
  }

  compare(a,b,op){
    switch(op){
      case '<':
        return Cast.compare(a, b) < 0;
      case '>':
        return Cast.compare(a, b) > 0;
      case '=':
        return Cast.compare(a, b) === 0;
      case 'â¤':
        return Cast.compare(a, b) <= 0;
      case 'â¥':
        return Cast.compare(a, b) >= 0;
      case 'â ':
        return Cast.compare(a, b) !== 0;
      default:
        return false;
    }
  }

  //å½¢å¦ï¼aâ¤bâ¤c op1,op2
  compareTwoSides (args){
    return this.compare(args.a, args.b, args.op1)&&this.compare(args.b, args.c, args.op2)
  }
  
  //å½¢å¦ï¼aâ¤bä¸/æ>c op1,op2 logic 
  compareTwoSidesPlus(args){
    switch(args.logic){
      case 'or':
        return this.compare(args.a, args.b, args.op1)||this.compare(args.a, args.c, args.op2)
      case 'and':
        return this.compare(args.a, args.b, args.op1)&&this.compare(args.a, args.c, args.op2)
      default:
        return false;
    }
  }

  //æ°ç»æåºè§å
  sortRule(propName,order) {
    return (a, b) => {
      a = a[propName]
      b = b[propName]
      if (a > b) return order === 'asc' ? 1 : -1;
      else if (a < b) return  order === 'asc' ? -1 : 1;
      else return 0;
    }
  }

  //æ¥æ¾æææåºè¡¨
  findAllSortedTable() {
    const list = [];
    let temp = this.sortedTable;
    Object.keys(temp).forEach(obj => {
      //if ( Array.isArray (temp[obj]) ) {
        list.push(obj);
      //}
    });
    if (list.length === 0) {
      list.push({
        text: '-',
        value: 'empty',
      });
    }
    //list.sort(this.sortRule("text"));
    return list;
  }
  
  createTableIfNotExist(list){
    if(!(list in this.sortedTable))
      this.sortedTable[list]={order:'desc',list:[]};
  }

  sortTable(list){
    this.sortedTable[list].list.sort(this.sortRule("rankValue",this.sortedTable[list].order));
  }
  
  //ðæ¸ç©ºæåºè¡¨
  clearSortedTable (args){
    this.createTableIfNotExist(args.list)
    this.sortedTable[args.list].list=[];
  }

  //ðè®¾ç½®æåºæ¹å¼
  setTypeOfSortedTable (args){
    this.createTableIfNotExist(args.list)
    this.sortedTable[args.list].order=args.type;
    this.sortTable(args.list)
  }

  //æ¥æ¾å¨åè¡¨ä¸­çæå¥ä½ç½®ï¼å·²æåè¦çï¼
  _findPlaceAndInsert(list, order, item){
    //å é¤å·²å­å¨çåå®¹
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === item.name){
        //å é¤ååé¡¹
        list.splice(i,1);
        break;
      }
    }
    //æ¥æ¾æå¥ä½ç½®å¹¶æå¥
    for (let i = 0; i < list.length; i++) {
      if ((list[i].rankValue > item.rankValue && order ==='asc')||
      (list[i].rankValue < item.rankValue && order ==='desc')){
        //æå¥å¨è¯¥é¡¹å
        list.splice(i,0,item);
        return;
      }
    }
    //æ²¡æ¾å°æå¥ä½ç½®ï¼å å¨æ«å°¾
    list.push(item);
  }

  //ðå°åå®¹å å¥è¡¨
  addToSortedTable (args){
    this.createTableIfNotExist(args.list)
    this._findPlaceAndInsert(
      this.sortedTable[args.list].list,
      this.sortedTable[args.list].order,
      {name:args.name, rankValue:args.value, extra:args.extra});
  }
  
  _getTInItem (item, t, rank){
    if(item === undefined)  return '';
    switch(t){
      case '1':
        return item.name;
      case '2':
        return rank;
      case '3':
        return item.rankValue;
      case '4':
        return item.extra;
      default:
        return '';
    }
  }

  //ðè·åç¬¬né¡¹
  getFromSortedTableByNo (args){
    if(!(args.list in this.sortedTable)) return '';
    let list = this.sortedTable[args.list].list;
    return this._getTInItem (list[args.n-1], args.t, Cast.toNumber(args.n));
  }

  _getItemIdxByName(list, name){
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === name){
        return i;
      }
    }
    return -1;
  }

  //ðè·ååä¸ºXXçé¡¹
  getFromSortedTableByName (args){
    if(!(args.list in this.sortedTable)) return '';
    let list = this.sortedTable[args.list].list;
    let n = this._getItemIdxByName(list ,args.name) ;
    if(n === -1)  return '';
    return this._getTInItem (list[n], args.t, n+1);
  }

  //ðè·åæåºè¡¨é¿åº¦
  lengthOfSortedTable (args){
    if(!(args.list in this.sortedTable)) return 0;
    return this.sortedTable[args.list].list.length;
  }

  //ðå é¤æåºè¡¨åä¸ºXXçåå®¹
  deleteNameOfSortedTable (args){
    if(!(args.list in this.sortedTable)) return;
    let list = this.sortedTable[args.list].list;
    let n = this._getItemIdxByName(list ,args.name) ;
    if(n === -1)  return;
    list.splice(n, 1);
  }

  //è·åé¢è²HEXç 
  colorToHex (args, util) {
    let c = Cast.toRgbColorList(args.COLOR)
    return Color.rgbToHex({r:c[0],g:c[1],b:c[2]});
  }


  //ðï¸ ä¸´æ¶åéç§¯æ¨
  deleteAllTempData (args) {
    this.tempData = {};
  }

  getCountOfTempData (args) {
    return Object.keys (this.tempData).length;
  }

  delTempData (args) {
    delete this.tempData[Cast.toString(args.data)];
  }

  setTempVar (args) {
    this.tempData[Cast.toString(args.var)] = args.t;
  }

  addTempVar (args) {
    this.tempData[Cast.toString(args.var)] = Cast.toNumber(this.tempData[Cast.toString(args.var)]) + Cast.toNumber(args.t);
  }

  getTempVar (args) {
    let temp = this.tempData[Cast.toString(args.var)]
    if(Array.isArray(temp)) return JSON.stringify(temp);
    return Cast.toString(temp);
  }

  //åå»ºææ¸ç©º
  clearTempList (args) {
    this.tempData[Cast.toString(args.list)] = [];
  }

  initTempList (args) {
    try {
      let content = JSON.parse(Cast.toString(args.t))
      if(Array.isArray(content)) {
        this.tempData[Cast.toString(args.list)] = content;
      }
    } catch (e) {

    }
  }

  addTempList (args) {
    let list = this.tempData[Cast.toString(args.list)]
    if(!Array.isArray(list)) return;
    list.push(Cast.toString(args.t));
  }

  opTempList (args) {
    let list = this.tempData[Cast.toString(args.list)]
    if(!Array.isArray(list)) return;
    let n = Cast.toNumber(args.n)
    if(n < 1 || n >list.length+1) return;
    n -= 1;
    switch(args.op){
      case '1'://æå¥
        list.splice(n,0,Cast.toString(args.t));
        return;
      case '2'://æ¿æ¢
        list[n] = Cast.toString(args.t);
        return;
      case '3'://å¢å 
        list[n] = Cast.toNumber(list[n]) + Cast.toNumber(args.t);
        return;
      default:
        return;
    }
  }

  delItemOfTempList (args) {
    let list = this.tempData[Cast.toString(args.list)]
    if(!Array.isArray(list)) return;
    let n = Cast.toNumber(args.n)
    if(n < 1 || n >list.length) return;
    n -= 1;
    list.splice(n,1);
  }

  getItemOfTempList (args) {
    let list = this.tempData[Cast.toString(args.list)]
    if(!Array.isArray(list)) return '';
    let n = Cast.toNumber(args.n)
    if(n < 1 || n >list.length) return '';
    n -= 1;
    return Cast.toString(list[n]);
  }

  lengthOfTempList (args) {
    let list = this.tempData[Cast.toString(args.list)]
    if(!Array.isArray(list)) return 0;
    return list.length;
  }
  
}



window.tempExt = {
    Extension: ArkosExtensions,
    info: {
      name: 'hcn.extensionName',
      description: 'hcn.description',
      extensionId: 'hcnTest',
      // iconURL: icon,
      // insetIconURL: cover,
      featured: true,
      disabled: false,
      collaborator: 'only for hcn test',
    },
    l10n: {
      'zh-cn': {
        'hcn.extensionName': 'hcn çæµè¯',
        'hcn.description': 'hcn çæµè¯',
      },
      en: {
        'hcn.extensionName': 'hcn test',
        'hcn.description': 'hcn test',
      },
    },
  }