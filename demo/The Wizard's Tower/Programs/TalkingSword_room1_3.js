/*
 * Copyright (c) 2017, rpgtoolkit.net <help@rpgtoolkit.net>
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/* global rpgcode */

rpgcode.clearDialog();

var swordActive = rpgcode.getGlobal("swordActive");
if (!swordActive) {
  rpgcode.showDialog("Pssst, Over here");
}

rpgcode.endProgram();