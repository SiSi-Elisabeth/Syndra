class Validate {
  async undefinedCheck(val, par) {
    if(val === undefined) {
      throw({ msg: `${par}字段不存在`, code: 400})
    }
  }
  // 空值和字符串的校验
  async nullCheck (val, tips, par) {
    await this.undefinedCheck(val, par);
    if(val.trim()==='') {
      throw({msg: tips, code: 422});
    }
    if(typeof val !== 'string') {
      throw { msg:`${par}字段必须是字符串类型`, code: 400 };
    }
  }
  // 校验数组
  async isArrayCheck (val, tips, par) {
    await this.undefinedCheck(val, par);
    if(!Array.isArray(val)) {
      throw({msg: `${par}字段必须是数组类型`, code: 400 });
    }
    if(val.length <= 0) {
      throw({msg: tips, code: 422 });
    }
  }
}
module.exports = new Validate();