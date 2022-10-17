const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

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
      let node = new Node(data)
      if (!this._root) this._root = node;
      else searhPath(this._root, node);

      function searhPath(_root, node) {

        if (_root.data > node.data && _root.left != null) {
            searhPath(_root.left, node)
            return
        }
        else if(_root.data < node.data && _root.right != null) {
            searhPath(_root.right, node)
            return
        }
        if (_root.data > node.data) {
            _root.left = node;
            return;
        }
        else if (_root.data < node.data) {
            _root.right = node;
            return;
        }
    }

  }


  has(data, _root = this._root) {
    if (_root.data > data && _root.left) return this.has(data, _root.left);
    else if (_root.data < data && _root.right) return this.has(data, _root.right);
    else if (_root.data == data) return true;
    else return false;
  }

  find(data, _root = this._root) {
      if (_root.data > data && _root.left) return this.find(data, _root.left);
      else if (_root.data < data && _root.right) return this.find(data, _root.right);
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
      } 

      if (!_root.left && !_root.right) return null;
      else if (!_root.left) return _root.right;
      else if (!_root.right) return _root.left;

      let maxLeft = _root.left;
      while (maxLeft.right) {
        maxLeft = maxLeft.right;
      }
      _root.data = maxLeft.data;
      _root.left = remover(_root.left, maxLeft.data);

      return _root;
    }
  }

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