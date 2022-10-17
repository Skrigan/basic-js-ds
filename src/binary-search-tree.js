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
      else if(_root.right != null) {
          // searhPath(_root.left, obj);
          this.searhPath(_root.right, obj)
          return
      }
      if (_root.data > obj.data) _root.left = obj
      else _root.right = obj
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

  remove(/* data */) {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
  }

  min() {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
  }

  max() {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};