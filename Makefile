#
# JBZoo Less
#
# This file is part of the JBZoo CCK package.
# For the full copyright and license information, please view the LICENSE
# file that was distributed with this source code.
#
# @package   Less
# @license   MIT
# @copyright Copyright (C) JBZoo.com,  All rights reserved.
# @link      https://github.com/JBZoo/Less
#

.PHONY: build update test-all test reset

build: update

test-all: test jshint jscs

update:
	@echo -e "\033[0;33m>>> >>> >>> >>> >>> >>> >>> >>> \033[0;30;46m Update project \033[0m"
	@npm update

test:
	@echo -e "\033[0;33m>>> >>> >>> >>> >>> >>> >>> >>> \033[0;30;46m Run all tests \033[0m"
	@chmod +x ./node_modules/.bin/karma
	./node_modules/.bin/karma start --single-run --browsers PhantomJS

jshint:
	@echo -e "\033[0;33m>>> >>> >>> >>> >>> >>> >>> >>> \033[0;30;46m Run jshint \033[0m"
	@chmod +x ./node_modules/.bin/jshint
	./node_modules/.bin/jshint src

jscs:
	@echo -e "\033[0;33m>>> >>> >>> >>> >>> >>> >>> >>> \033[0;30;46m Run jscs \033[0m"
	@chmod +x ./node_modules/.bin/jscs
	./node_modules/.bin/jscs src
