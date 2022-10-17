const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
      this._root = null;
  }

  root() {
      return this._root;
  }

  add(data) {
      let obj = {
          data: data,
          left: null,
          right: null,
      }
      if (!this._root) this._root = obj;
      else {
          this.searhPath(this._root, obj)
      }

  }
  searhPath(_root, obj) {

    if (_root.data > obj.data && _root.left != null) {
        // searhPath(_root.right, obj);
        this.searhPath(_root.left, obj)
        return
    }
    else if(_root.data < obj.data && _root.right != null) {
        // searhPath(_root.left, obj);
        this.searhPath(_root.right, obj)
        return
    }
    //НЕ РАБОТАЕТ...
    if (_root.data > obj.data) {
        _root.left = obj;
        return;
    }
    else if (_root.data < obj.data) {
        _root.right = obj;
        return;
    }
}

  has(data, _root = this._root) {
    if (_root.data > data && _root.left) {
      return this.has(data, _root.left)
    }
    else if (_root.data < data && _root.right) {
      return this.has(data, _root.right);
    }
    else if (_root.data == data) return true;
    else return false;
    }

  find(data, _root = this._root) {
      if (_root.data > data && _root.left) {
          return this.find(data, _root.left)
      }
      else if (_root.data < data && _root.right) {
          return this.find(data, _root.right);
      }
      else if (_root.data == data) return _root;
      else return null;
  }

  remove(data) {
    this._root = remover(this._root, data)

    function remover(_root, data) {

      if (_root.data > data) {
        _root.left = remover(_root.left, data);
        return _root;
      } else if (_root.data < data) {
        _root.right = remover(_root.right, data);
        return _root
      } else {

        if (!_root.left) {
          _root = _root.right;
          return _root;
        }

        if (!_root.right) {
          _root = _root.left;
          return _root;
        }

        let maxLeft = _root.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        _root.data = maxLeft.data;

        _root.left = remover(_root.left, maxLeft.data);

        return _root;

      }
    }
  }
  //   let _nextRoor = _root;
  //   // let _remove = true;
  //   if (_root.left && _root.left.right) {
      
  //   }
  //   while (true) {
  //     if (_root.data !== data) {
      
  //     } else if (_root.data === data) {

  //     }
  //   }

    //   throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      
  // }

  min(_root = this._root) {
    if (_root.left != null) return this.min(_root.left)
    else return _root.data;
  }

  max(_root = this._root) {
      if (_root.right != null) return this.max(_root.right)
      else return _root.data;
  }
}

module.exports = {
  BinarySearchTree
};